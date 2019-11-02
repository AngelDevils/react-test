const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const utils = require('./webpack.utils.js'); //导入工具类  
const isDist = utils.getDistFlag(); //是否启用压缩配置
const alias = utils.getProjectAlias();
const webpackConfig = {
    mode: isDist ? 'production' : 'development',
    devtool: 'cheap-module-eval-source-map',
    // 输入配置
    entry: [
        path.resolve(__dirname, 'src/index.js')
    ],

    // 输出配置
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: isDist ? 'js/[name].[hash].bundle.js' : 'js/[name].bundle.js',
        chunkFilename: isDist ? 'js/[name].[hash].bundle.js' : 'js/[name].bundle.js',
        publicPath: '/'
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                },
            }
        },
    },
    module: {
        rules: [
            {
                test: /\.js[x]?$/,
                enforce: 'pre',
                use: [{
                    loader: 'eslint-loader',
                    options: { fix: true }
                }],
                exclude: /node_modules/
            },
            {
                test: /\.(js|jsx)$/,
                use: 'react-hot-loader/webpack',
                include: /node_modules/
            },
            {
                test: /\.js[x]?$/,
                include: path.resolve('src'), // 只解析src下面的文件,不推荐用exclude
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.(css|scss)$/,
                use: isDist ? [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                            plugins: () => [autoprefixer()],
                        },
                    },
                    'sass-loader'
                ] : [
                        'style-loader',
                        'css-loader',
                        {
                            loader: 'postcss-loader',
                            options: {
                                sourceMap: true,
                                plugins: () => [autoprefixer()],
                            }
                        },
                        'sass-loader'
                    ]
            },
            {
                test: /\.(png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$/i,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: '4096',
                        name: 'assets/img/[name].[hash].[ext]',
                        publicPath: '/'
                    }
                },]
            }

        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',//输出文件的名称
            template: path.resolve(__dirname, 'src/index.html'),//模板文件的路径
            favicon: path.resolve(__dirname, 'favicon.ico'),//favicon.ico文件路径
        }),
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.css', '.scss'],
        alias: alias,
    },
};

if (isDist) {
    webpackConfig.plugins.push(new MiniCssExtractPlugin({
        filename: 'css/style.[hash].css',
        chunkFilename: 'css/[name].[hash].css',
    }));
    webpackConfig.optimization.minimizer = [
        new UglifyJsPlugin({
            chunkFilter: (chunk) => {
                if (chunk.name === 'vendors') {
                    return false;
                }
                return true;
            }
        }),
        new OptimizeCSSAssetsPlugin({})
    ];
} else {
    webpackConfig.devServer = {
        contentBase: path.resolve(__dirname, 'dist'),
        host: 'localhost', // 服务器的ip地址 希望服务器外可以访问就设置 0.0.0.0
        port: 8088, // 端口
        hot: true, // 开启HMR
        historyApiFallback: true,
        // open: true, // 自动打开页面
    };
}

module.exports = webpackConfig;