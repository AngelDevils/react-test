import * as pro from './type.js';


/**
 * 初始化获取商品数据，保存至redux
 */
export const getProductData = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            let result = [{
                name: '西瓜',
                price: '123'
            }, {
                name: '苹果',
                price: '456'
            }];
            dispatch({
                type: pro.GETPRODUCTION,
                dataList: result,
            });
            resolve(result);
        }, 1000);
    });
};

/**
 * 初始化获取商品数据，保存至redux
 */
export const getProData = () => {
    // 返回函数，异步dispatch
    return async dispatch => {
        try {
            let result = [{
                name: '西瓜',
                price: '123'
            }, {
                name: '苹果',
                price: '456'
            }];
            dispatch({
                type: pro.GETPRODUCTION,
                dataList: result,
            });
        } catch (err) {
            console.error(err);
        }
    };
};

