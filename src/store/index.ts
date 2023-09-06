import {combineReducers, createStore, applyMiddleware, compose} from 'redux'
import productReducer from "../reducers/productReducer.ts";
import thunkMiddleware from 'redux-thunk'
const middlewareEnhancer = applyMiddleware(thunkMiddleware)
const composedEnhancers = compose(middlewareEnhancer)


const store = createStore(combineReducers({product: productReducer}),
    undefined,
    composedEnhancers)
export default store
