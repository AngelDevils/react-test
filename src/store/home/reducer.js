import * as home from './type';

let defaultState = {
    orderSum: '', //金额
    name: '', //姓名
    phoneNo: '', //手机号
    imgpath: '', //图片地址
};

/**
 * 首页表单数据
 * @param {*} state
 * @param {*} action
 */
export const formData = (state = defaultState, action = {}) => {
    switch (action.type) {
        case home.SAVEFORMDATA:
            return { ...state,...action.value};
        default:
            return state;
    }
};