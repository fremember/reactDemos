/**
 * createStore创建状态管理器store
 * applyMiddleware使用中间件，链式使用，它是一个函数，所以将中间件作为参数传递就可以了
 * combineReducers模块化，可以将多个reducers糅合成一个，类似于命名空间，函数内部使用键值对组织
 */
import { createStore, applyMiddleware, combineReducers } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import { counterReducer } from './../redux/mwCounter'


let store = createStore(
	combineReducers({ counter: counterReducer }), applyMiddleware(logger, thunk))

export default store
