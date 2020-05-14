export let counterReducer = (state = 10, action) => {
	switch (action.type) {
		case 'add':
			return state + 1
		case 'minus':
			return state - 1
		default:
			return state
	}
}

// action creator
export let add = () => ({ type: 'add' })
export let minus = () => ({ type: 'minus' })
export let asyncAdd = () => dispatch => {
	// 做异步操作
	setTimeout(() => {
		dispatch({ type: 'add' })
	}, 2000)
}