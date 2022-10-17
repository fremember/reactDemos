import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { changeUsername } from 'stores/user'

export const Message: React.FC = () => {
    const navigate = useNavigate(),
        startChat = (toId: number|string) => {
            navigate(`/messageDetail/${toId}`)
        },
        dispatch = useDispatch(),
        { username } = useSelector((state: any) => state.userSlice),
        changeNameClick = () => {
            dispatch(changeUsername(`${Math.floor(Math.random() * 11)}`))
        };
    return (
        // 聊天列表，接口获取
        <>
            <section onClick={ () => startChat(12) }>message</section>
            <div onClick={ changeNameClick }>message ----- { username }</div>
        </>
    )
}