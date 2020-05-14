import React from 'react'
import { connect } from 'react-redux'

let mapStateToProps = state => ({ num: state }),
	mapDispatchToProps = {
		add: () => ({ type: 'add' }),
		minus: () => ({ type: 'minus' })
	};
// 第一种方式
// class ReactRedux extends React.Component {
// 	render () {
// 		return (
// 			<div>
// 				<p>
// 					<button onClick={ this.props.minus }>-</button>
// 					{ this.props.num }
// 					<button onClick={ this.props.add }>+</button>
// 				</p>
// 			</div>
// 		)
// 	}
// }
// export default connect(mapStateToProps, mapDispatchToProps)(ReactRedux)

// 第二种方式
/*function ReactRedux ({ num, add, minus }) {
	return (
		<div>
			<p>
				<button onClick={ minus }>-</button>
				{ num }
				<button onClick={ add }>+</button>
			</p>
		</div>
	)
}
export default connect(mapStateToProps, mapDispatchToProps)(ReactRedux)*/

// 第三种方式
@connect(
	mapStateToProps,
	mapDispatchToProps
)
class ReactRedux extends React.Component {
	render () {
		let { minus, num, add } = this.props
		return (
			<div>
				<p>
					<button onClick={ minus }>-</button>
					{ num }
					<button onClick={ add }>+</button>
				</p>
			</div>
		)
	}
}

export default ReactRedux