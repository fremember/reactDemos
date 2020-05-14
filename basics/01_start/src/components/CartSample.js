import React from 'react'
import Cart from './Cart'
export default class CartSample extends React.Component {
    constructor (props) {
        super(props)
        this.state= {
            goods: [
                { id: 1, title: '苹果' },
                { id: 2, title: '橘子' }
            ],
            text: '',
            cart: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.add = this.add.bind(this)
        this.minus = this.minus.bind(this)
        this.del = this.del.bind(this)
    }
    handleChange (e) {
        this.setState({ text: e.target.value })
    }
    handleAdd () {
        this.setState(state => ({
            goods: [ ...state.goods, { id: state.goods.length + 1, title: state.text } ]
        }), () => {
            this.setState({ text: '' })
        })
    }
    addCart (good, type) {// 第三种方式写方法
        let newCart = [ ...this.state.cart ],
            idx = newCart.findIndex(v => v.id === good.id),
            item = newCart[idx];
        if(item) {
            if(type === '+') {
                newCart.splice(idx, 1, { ...item, number: item.number + 1 })
            } else {
                if(item.number - 1 > 0) {
                    newCart.splice(idx, 1, { ...item, number: item.number - 1 })
                } else {
                    this.del(good)
                    return
                }
            }
        } else {
            newCart.push({ ...good, number: 1 })
        }
        this.setState({ cart: newCart })
    }
    add (good) {
       this.addCart(good, '+')
    }
    minus (good) {
        this.addCart(good, '-')
    }
    del (good) {
        let newCart = [ ...this.state.cart ],
            idx = newCart.findIndex(v => v.id === good.id),
            item = newCart[idx];
        if(item) {
            newCart.splice(idx, 1)
        }
        this.setState({ cart: newCart })
    }
    render () {
        return (
            <div>
                <label>
                    商品名称: <input value={ this.state.text } onChange={ this.handleChange } />
                </label>
                <input type="button" value="添加" onClick={ this.handleAdd } />
                <ul>
                    {
                        this.state.goods.map(good => <li key={ good.id } onClick={ () => this.addCart(good, '+') }>{ good.title }</li>)
                    }
                </ul>
                <Cart cart={ this.state.cart } add={ this.add } minus={ this.minus } del={ this.del } />
            </div>
        )
    }
}