import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { countReducer, initialState } from "./reducers";
const reducers = combineReducers({
    countReducer
});
//引入组合后的
export type reducerType = ReturnType<typeof reducers>;
//第一个参数就是组合后的reducers 第二个参数就是默认值 第三个就是异步的thunk那些
export default createStore(reducers, {
    countReducer:initialState
}, applyMiddleware(thunk));