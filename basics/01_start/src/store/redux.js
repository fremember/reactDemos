import { createStore } from 'redux'

let counterReducer = (state = 0, action) => {
		switch (action.type) {
			case 'add':
				return state + 1
			case 'minus':
				return state - 1
			default:
				return state
		}
	},
	store = createStore(counterReducer);
export default store