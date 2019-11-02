import * as pro from './type';

let defaultState = {
  /**
   * 商品数据
   * @type {Array}
   *[{ name:'',price:''}]
   */
  dataList: [],
};

export const proData = (state = defaultState, action) => {
  switch(action.type){
    case pro.GETPRODUCTION: 
      return {...state, ...action};
    default: 
      return state;
  }
};