module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true,
        "commonjs": true
    },
    "extends": [
        "plugin:react/recommended"
    ],
    "parser": "babel-eslint",
    parserOptions: {
        sourceType: 'module',
        allowImportExportEverywhere: true,
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true,
            "arrowFunctions": true,
            "classes": true,
            "modules": true,
            "defaultParams": true
        },
    },
    rules: {
        "react/prop-types": 0,//验证prop-types。0 =关闭，1 =警告，2 =错误。默认为0。
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
        "semi": ["warn",
            "always"
        ],
        // "no-unused-vars": ["warn", {
        //     "args": "none",
        //     "vars": "local",
        //     "args": "none"
        // }],
        "quotes": [
            "warn",
            "single"
        ],
        "require-jsdoc": ["warn", {
            "require": {
                "FunctionDeclaration": true,
                "MethodDefinition": false,
                "ClassDeclaration": true,
                "ArrowFunctionExpression": false,
                "FunctionExpression": false
            }
        }]
    }
}
