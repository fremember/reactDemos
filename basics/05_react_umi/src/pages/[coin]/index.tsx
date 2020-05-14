import React from 'react'

export default (props: any) => {
    // console.log(props)
    let { coin } = props.match.params
    return (
        <div>文件夹是参数{ coin }</div>
    )
}