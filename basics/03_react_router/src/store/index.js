import { createStore, applyMiddleware, combineReducers } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import { user } from './user.redux'


let store = createStore(
	combineReducers({ user: user }), applyMiddleware(logger, thunk))

export default store