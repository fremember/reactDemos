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

import React, { FC, useContext } from 'react'
import styles from './index.module.css'
import { appContext } from './../../AppState'
import { widthAddToCard } from './../AddToCart'
export interface RobotProp {
    id: string;
    name: string;
    email: string;
    addToCart: (id: number|string, name: string, email: string) => React.MouseEventHandler<HTMLButtonElement> | undefined
}
const Robot: FC<RobotProp> = ({ id, name, email, addToCart }) => {
    const value = useContext(appContext);
    return (
        <li className={ styles.cardContainer }>
            <img src={`https://robohash.org/${ id }`} alt="" />
            <p>{ name }</p>
            <p>{ email }</p>
            <p>{ value.username }</p>
            <button onClick={ () => addToCart(id, name, email) }>加入购物车</button>
        </li>
    )
}

export default widthAddToCard(Robot)