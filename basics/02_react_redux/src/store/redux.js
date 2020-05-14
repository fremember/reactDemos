import { createStore } from 'redux'
import { counterReducer } from './../redux/counter'

let store = createStore(counterReducer)

export default store