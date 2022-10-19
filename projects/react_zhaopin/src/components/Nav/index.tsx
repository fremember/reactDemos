import React from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'

import { IconfontJob, IconfontHas, IconfontMessage, IconfontUser } from 'components'

import commonStyles from 'assets/css/common.module.css'
import styles from './index.module.scss'

/**
 * grid 和 flex 各自的应用场景
 * 1. 要考虑，是一维布局 还是 二维布局
 * 一般来说，一维布局用flex，二维布局用grid
 * 2. 是从内容出发还是从布局出发？
 * 从内容出发：你先有一组内容(数量一般不固定),然后希望他们均匀的分布在容器中，由内容自己的大小决定占据的空间
 * 从布局出发：先规划网格(数量一般比较固定)，然后再把元素往里填充
 * 从内容出发，用flex
 * 从布局出发，用grid
 *
 */

interface LinkItem {
    url: string;
    title: string;
    icon?: any;
}
export const Nav: React.FC = () => {
    const linkList: LinkItem[] = [
            { url: '/job', title: '职位', icon: IconfontJob },
            { url: '/has', title: '有了', icon: IconfontHas },
            { url: '/message', title: '消息', icon: IconfontMessage },
            { url: '/user', title: '我的', icon: IconfontUser }
        ],
        { pathname } = useLocation();// 里面字段是hash、key、pathname、search、state
    return <>
        <nav className={ `${ commonStyles['pos-f'] } ${ commonStyles['flex-center'] } ${ styles.nav }` }>
            {
                linkList.map((link: LinkItem) => (
                    // 首次进入的时候，要单独处理第一个路由的高亮
                    <NavLink className={ `${ commonStyles['flex-1'] } ${ (pathname === link.url) || (pathname === '/' && link.url === '/job') ? 'active' : '' }`  } to={ link.url } key={ link.url }>
                        <link.icon /><br />
                        { link.title }
                    </NavLink>
                ))
            }
        </nav>
        <Outlet/>
    </>
}
