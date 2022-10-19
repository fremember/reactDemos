import React from 'react';
import { useNavigate } from "react-router-dom"

import { Layout, Typography, Input, Dropdown, Menu, Button } from 'antd';
// import ItemType from 'antd/lib/menu'
import type { MenuProps } from 'antd';
import { GlobalOutlined } from '@ant-design/icons'
import commonStyles from 'assets/css/common.module.css'
import styles from './index.module.css'

import logo from 'assets/images/logo.svg'

interface MenuItem {
    key: string;
    label: string;
}
// ItemType
export const Header: React.FC = () => {
    const navigate = useNavigate(),
        menuLists: MenuItem[] = [// 这个数据应该从接口获取
            { key: '/index', label: '旅游首页' },
            { key: '/login', label: '周末游' },
            { key: '3', label: '跟团游' },
            { key: '4', label: '自由行' },
            { key: '5', label: '私家团' },
            { key: '6', label: '邮轮' },
            { key: '7', label: '酒店+景点' },
            { key: '8', label: '当地玩乐' },
            { key: '9', label: '主题游' },
            { key: '10', label: '定制游' },
            { key: '11', label: '游学' },
            { key: '12', label: '签证' },
            { key: '13', label: '企业游' },
            { key: '14', label: '高端游' },
            { key: '15', label: '爱玩户外' },
            { key: '16', label: '保险' },
        ],
        defaultSelectedKeys: string[] = ['1'],
        menuClick: MenuProps['onClick'] = e => {
            console.log(e)
            navigate(e.key)
        };
    return (
        <div className={ styles['app-header'] }>
            {/* top-header */}
            <div className={ styles['top-header'] }>
                <div className={ styles['common-header'] }>
                    <Typography.Text>让旅游更幸福</Typography.Text>
                    <Dropdown.Button
                        style={{ marginLeft: 15 }}
                        overlay={
                            <Menu>
                                <Menu.Item>中文</Menu.Item>
                                <Menu.Item>English</Menu.Item>
                            </Menu>
                        }
                        icon={ <GlobalOutlined /> }
                    >
                        语言
                    </Dropdown.Button>
                    <Button.Group className={ styles['button-group'] }>
                        <Button>注册</Button>
                        <Button>登陆</Button>
                    </Button.Group>
                </div>
            </div>
            {/* main-header */}
            <Layout.Header className={ `${commonStyles.flex} ${commonStyles['ai-c']} ${styles['common-header']} ${styles['main-header']}` }>
                <img className={ styles.logo } src={ logo } alt="logo" />
                <Typography.Title className={ styles.title } level={ 3 }>React 旅游网</Typography.Title>
                <Input.Search className={ styles['search-input'] } placeholder="请输入旅游目的地、主题、或关键字" />
            </Layout.Header>
            {/* menu-header */}
            <Menu
                mode={ "horizontal" }
                className={ styles['main-menu'] }
                items={ menuLists }
                defaultSelectedKeys={ defaultSelectedKeys }
                onClick={ menuClick }
            ></Menu>
        </div>
    )
}