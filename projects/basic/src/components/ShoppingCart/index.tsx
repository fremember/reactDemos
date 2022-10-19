import React, { Component, MouseEvent } from 'react'
import { FiShoppingCart } from 'react-icons/fi'
import styles from './index.module.css'

import { appContext } from './../../AppState'

interface Props {}
interface State {
    isOpen: boolean;
    count: number;
}
export default class ShoppingCart extends Component<Props, State> {
    constructor (props: Props) {
        super(props)
        this.state = {
            isOpen: false,
            count: 0
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick (): void {
        console.log(1)
        this.setState({ isOpen: !this.state.isOpen })
    }
    handleClick2 () {
        console.log(2)
        this.setState({ isOpen: !this.state.isOpen })
    }
    handleClick3 = (e: MouseEvent): void => {
        console.log(3)
        // console.log(e.target)// 描述事件发生的元素
        // console.log(e.currentTarget)// 描述的是事件处理绑定的元素
        if((e.target as HTMLElement).nodeName === 'SPAN') {
            this.setState({ isOpen: !this.state.isOpen })
        }
    }
    handleCount = () => {
        // this.setState({ count: this.state.count + 1 }, () => {
        //     console.log(`center>>>>>>${this.state.count}`)// 1,2,3,4……
        // })
        // this.setState({ count: this.state.count + 1 }, () => {
        //     console.log(`center>>>>>>${this.state.count}`)// 1,2,3,4……
        // })
        this.setState((preState, preProps) => {
            return { count: preState.count + 1 }
        }, () => {
            console.log(`center>>>>>>${this.state.count}`)// 2,4,6,8……
        })
        this.setState((preState, preProps) => {
            return { count: preState.count + 1 }
        }, () => {
            console.log(`center>>>>>>${this.state.count}`)// 2,4,6,8……
        })
    }
    render() {
        let { isOpen, count } = this.state
        return (
            <appContext.Consumer>
                {
                    (value) => {
                        return (
                            <div className={ styles.cardContainer }>
                                <button onClick={ this.handleCount }>点击次数：{ count }</button>

                                {/* <button className={ styles.button } onClick={ this.handleClick }>购物车</button> */}
                                {/* <button className={ styles.button } onClick={ (e) => this.handleClick2(e) }>购物车</button> */}
                                <button className={ styles.button } onClick={ this.handleClick3 }>
                                    <FiShoppingCart />
                                    <span>购物车{ value.shoppingCart.items.length || 0 }(件)</span>
                                </button>
                                <div className={ styles.cartDropDown } style={{ display: isOpen ? 'block' : 'none' }}>
                                    <ul>
                                        {
                                            value.shoppingCart.items.map(item => (
                                                <li key={ item.id }>{ item.name }</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                        )
                    }
                }
            </appContext.Consumer>
            
        )
    }
}