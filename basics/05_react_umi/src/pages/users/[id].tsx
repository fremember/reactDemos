import React from 'react'

export default (props: any) => {
    // console.log(props)
    let { id } = props.match.params
    return (
        <div>这个是参数路由，参数是{ id }</div>
    )
}