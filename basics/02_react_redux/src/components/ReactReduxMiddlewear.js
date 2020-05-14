import React from 'react'
import { connect } from 'react-redux'
import { minus, add, asyncAdd } from './../redux/mwCounter'

let mapStateToProps = state => ({ num: state.counter }),
	mapDispatchToProps = { add, minus, asyncAdd };

@connect(
	mapStateToProps,
	mapDispatchToProps
)
class ReactRedux extends React.Component {
	render () {
		let { minus, num, add, asyncAdd } = this.props
		return (
			<div>
				<p>
					<button onClick={ minus }>-</button>
					{ num }
					<button onClick={ add }>+</button>
					<button onClick={ asyncAdd }>异步</button>
				</p>
			</div>
		)
	}
}

export default ReactRedux