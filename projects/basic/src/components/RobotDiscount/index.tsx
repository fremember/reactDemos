/*
// 第一种方式使用useContext的内容
import React, { FC } from 'react'
import styles from './index.module.css'
import { appContext } from './../../index'

interface RobotProp {
    id: string;
    name: string;
    email: string;
}
const Robot: FC<RobotProp> = ({ id, name, email }) => {
    return (
        <appContext.Consumer>
            {
                (value) => {
                    return <li className={ styles.cardContainer }>
                        <img src={`https://robohash.org/${ id }`} alt="" />
                        <p>{ name }</p>
                        <p>{ email }</p>
                        <p>{ value.username }</p>
                    </li>
                }
            }
        </appContext.Consumer>
    )
}

export default Robot
*/
// 第二种方式使用useContext的内容
// import React, { FC, useContext } from 'react'
// import styles from './index.module.css'
// import { appContext } from './../../index'
// interface RobotProp {
//     id: string;
//     name: string;
//     email: string;
// }
// const Robot: FC<RobotProp> = ({ id, name, email }) => {
//     const value = useContext(appContext)
//     return (
//         <li className={ styles.cardContainer }>
//             <img src={`https://robohash.org/${ id }`} alt="" />
//             <p>{ name }</p>
//             <p>{ email }</p>
//             <p>{ value.username }</p>
//         </li>
//     )
// }

// export default Robot

// import React, { FC, useContext } from 'react'
// import styles from './index.module.css'
// import { appContext, appSetStateContext } from '../../AppState'
// interface RobotProp {
//     id: string;
//     name: string;
//     email: string;
// }
// const RobotDiscount: FC<RobotProp> = ({ id, name, email }) => {
//     const value = useContext(appContext),
//         setState = useContext(appSetStateContext),
//         addToCart = () => {
//             if(setState) {
//                 setState((state: any) => {// 这个类型可以使用AppState.tsx中的AppStateValue
//                     return {
//                         ...state,
//                         shoppingCart: {
//                             items: [ ...state.shoppingCart.items, {
//                                 id, name, email
//                             } ]
//                         }
//                     }
//                 })
//             }
//         };
//     return (
//         <li className={ styles.cardContainer }>
//             <img src={`https://robohash.org/${ id }`} alt="" />
//             <h2>打折商品</h2>
//             <p>{ name }</p>
//             <p>{ email }</p>
//             <p>{ value.username }</p>
//             <button onClick={ addToCart }>加入购物车</button>
//         </li>
//     )
// }

// export default RobotDiscount


import React, { FC, useContext } from 'react'
import styles from './index.module.css'
import { appContext } from '../../AppState'
import { useAddToCard } from './../AddToCart'
export interface RobotProp {
    id: string;
    name: string;
    email: string;
}
const RobotDiscount: FC<RobotProp> = ({ id, name, email }) => {
    const value = useContext(appContext),
        addToCart = useAddToCard();
    return (
        <li className={ styles.cardContainer }>
            <img src={`https://robohash.org/${ id }`} alt="" />
            <h2>打折商品</h2>
            <p>{ name }</p>
            <p>{ email }</p>
            <p>{ value.username }</p>
            <button onClick={ () => addToCart(id, name, email) }>加入购物车</button>
        </li>
    )
}

export default RobotDiscount