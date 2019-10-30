/**
 * redux模块化
 * 合并多个reducer：影响到State的获取
 */

import {
    combineReducers
} from 'redux';

import cartReducer from './cart';


let rootReducer = combineReducers({
    cart: cartReducer,
});

export default rootReducer;