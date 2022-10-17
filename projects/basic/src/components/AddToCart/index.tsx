import React, { useContext } from 'react'
import { appSetStateContext } from './../../AppState'
import { RobotProp } from './../Robot'

// 高阶组件命名规范
export const widthAddToCard = (ChildComponent: React.ComponentType<RobotProp>) => {
    // 返回匿名类式组件
    // return class extends React.Component {}

    // 返回匿名函数式组件
    return (props) => {
        const setState = useContext(appSetStateContext),
            addToCart = (id, name, email) => {
                if(setState) {
                    setState((state: any) => {// 这个类型可以使用AppState.tsx中的AppStateValue
                        return {
                            ...state,
                            shoppingCart: {
                                items: [ ...state.shoppingCart.items, {
                                    id, name, email
                                } ]
                            }
                        }
                    })
                }
            };
        return <ChildComponent { ...props } addToCart={ addToCart } />
    }
}


// 自定义hoc
export const useAddToCard = () => {
    const setState = useContext(appSetStateContext),
        addToCart = (id, name, email) => {
            if(setState) {
                setState((state: any) => {// 这个类型可以使用AppState.tsx中的AppStateValue
                    return {
                        ...state,
                        shoppingCart: {
                            items: [ ...state.shoppingCart.items, {
                                id, name, email
                            } ]
                        }
                    }
                })
            }
        };
    return addToCart
}