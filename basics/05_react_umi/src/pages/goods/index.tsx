import React from 'react'
import { connect } from 'dva'
import { Card, Button } from 'antd'
import { useEffect } from 'react'

export default connect(
    state => ({
        loading: state.loading,// dav可以通过loading空间获取加载状态，可以直接使用
        goodsList: state.goods// 获取指定命名空间的模型状态
    }),
    {
        addGood: title => ({
            type: 'goods/addGood',// action的type需要以命名空间为前缀+reducer名称
            title
        }),
        getList: () => ({
            type: 'goods/getList'
        })
    }
)(({ goodsList, addGood, getList, loading }) => {
    useEffect(() => {
        getList()
    }, [])
    // console.log(loading)
    return (
        <div>
            {/* 加载状态，下面两行都可以使用 */}
            {/* { loading.models.goods && <p>loading...</p> }  */}
            { loading.effects['goods/getList'] && <p>loading...</p> } 
            {
                goodsList.map(good => {
                    return (
                        <Card key={ good.title }>
                            <div>{ good.title }</div>
                        </Card>
                    )
                })
            }
            <div>
                <Button onClick={ () => addGood(`商品${new Date().getTime()}`) }>添加商品</Button>
            </div>
        </div>
    )
})