import {createStore, combineReducers, applyMiddleware} from 'redux';
import * as home from './home/reducer';
import * as about from './about/reducer';
import thunk from 'redux-thunk';

/**
 * applyMiddleware    Redux的一个原生方法，将所有中间件组成一个数组，依次执行
 * redux中的action仅支持原始对象（plain object）
 * redux-thunk(async/await）
 * 当你触发 action 后，combineReducers 返回的 store 会负责调用两个 reducer
 */

let store = createStore(
  combineReducers({...home,...about}),
  applyMiddleware(thunk)
);

export default store;