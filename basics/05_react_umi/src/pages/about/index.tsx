import React from 'react'
import { Button } from 'antd'
 export default (props) => {
    return (
        <div>
            <Button type="primary" onClick={ () => { props.history.push('/login') } }>关于</Button>
        </div>
    )
 }