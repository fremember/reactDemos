import React from 'react'
import store from './../store/redux'

export default class ReduxTest extends React.Component {
	render () {
		return (
			<div>
				<p>
					<button onClick={ () => store.dispatch({ type: 'minus' }) }>-</button>
					{ store.getState() }
					<button onClick={ () => store.dispatch({ type: 'add' }) }>+</button>
				</p>
			</div>
		)
	}
}