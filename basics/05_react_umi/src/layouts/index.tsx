import React from 'react'
import { Link } from 'umi'

export default (props: any) => {
    let navList = [
        { link: '/users/list', text: '列表' },
        { link: '/users/admin', text: 'Admin' },
        { link: '/users/user/123', text: '参数路由' },
        { link: '/users/coin/index',text: '文件夹参数coin' },
        { link: '/users/abc/index',text: '文件夹参数abc' },
        { link: '/login', text: '返回首页' }
    ]
    return (
        <div>
            <p>layout嵌套路由</p>
            <ul>
                {
                    navList.map(v => 
                        <li key={v.link}>
                            <Link to={v.link}>{ v.text }</Link>
                        </li>
                    )
                }
            </ul>
            <div>{ props.children }</div>
        </div>
    )
}