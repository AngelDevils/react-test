import * as home from './type';

/**
 * 保存表单数据
 * @param {*} value 
 * @param {*} datatype 
 */
export const saveFormData = (value) => {
    return {
      type: home.SAVEFORMDATA,
      value,
    };
  };