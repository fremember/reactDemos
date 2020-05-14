let initial = {
	isLogin: false,
	loading: false
}
export let user = (state = initial, action) => {
	switch (action.type) {
		case 'requestLogin':
			return {
				isLogin: false,
				loading: true
			}
		case 'login':
			return {
				isLogin: true,
				loading: false
			}
		default:
			return state
	}
}

// action creator
export let login = () => dispatch => {
	dispatch({ type: 'requestLogin' })
	// 做异步操作
	setTimeout(() => {
		dispatch({ type: 'login' })
	}, 2000)
}