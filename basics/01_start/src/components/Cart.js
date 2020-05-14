import React from 'react'

export default class Cart extends React.Component {
    // constructor(props) {
    //     super(props)
    // }
    render () {
        return (
            <div>
                <h1>购物车里面的内容</h1>
                {/* <ul>
                    {
                        this.props.cart.length > 0 && this.props.cart.map((good, index) => <li key={index}>{ good.title } ---------- { good.number }</li>)
                    }
                </ul> */}
                <table>
                    <tbody>
                        {
                            this.props.cart.length > 0 && this.props.cart.map(good => (
                                <tr key={ good.id }>
                                    <td>{ good.title }</td>
                                    <td>
                                        <button onClick={ () => this.props.minus(good) }>-</button>
                                        { good.number }
                                        <button onClick={ () => this.props.add(good) }>+</button>
                                        <button onClick={ () => this.props.del(good) }>删除</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}