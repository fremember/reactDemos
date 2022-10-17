import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

export const MessageDetail: React.FC = () => {
    const navigate = useNavigate(),
        { username } = useSelector((state: any) => state.userSlice)
    return (
        <div onClick={ () => navigate(-1) }>messageDetail===={ username }</div>
    )
}
