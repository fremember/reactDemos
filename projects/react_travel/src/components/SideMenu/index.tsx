import React from 'react'
import { sideMenuList } from './mockup'

import { Menu } from 'antd'

export const SideMenu: React.FC = () => {
    return (
        <Menu items={ sideMenuList } />
    )
}