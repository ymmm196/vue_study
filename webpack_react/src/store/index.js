import {
    createStore
} from 'redux';
import rootReducer from './reducer';

const store = createStore(rootReducer); //reducer为一个纯函数，用于设定state修改逻辑（如何修改state中的数据）


export default store;