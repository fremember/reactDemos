import React, { Component } from 'react';
import { Layout, Row, Col, Menu, Divider, Button, Dropdown } from 'antd';
import { HomeOutlined, BookOutlined, InfoCircleOutlined, UnorderedListOutlined } from '@ant-design/icons';
import { NavLink, Link } from 'react-router-dom';
import './MainHeader.css'
let navItem = [
        { icon: 'home', path: '/', content: '首页' },
        { icon: 'book', path: '/book', content: '教程' },
        { icon: 'info-circle-o', path: '/about', content: '关于' }
    ],
    topMenu = (
        <Menu className="drop-menu">
            {
                navItem.map((item, index) => {
                    return (
                        <Menu.Item key={ index }>
                            <Link to={ item.path }>{ item.content }</Link>
                        </Menu.Item>
                    )
                })
            }
            <Menu.Divider />
            <Menu.Item>
                <Link to='/login'>登录</Link>
            </Menu.Item>
            <Menu.Item>
                <Link to="/register">注册</Link>
            </Menu.Item>
        </Menu>
    );
export default class MainHeader extends Component {
    render () {
        return (
            <Layout.Header className="pos-f tl0 header">
                <Row className="pos-r header-row" >
                    <Col xs={24} md={6}>
                        <h1 className="logo">CNode</h1>
                    </Col>
                    <Col xs={0} md={18} className="header-right">
                        <Divider type="vertical" className="header-divider" />
                        <Menu className="nav" mode="horizontal">
                            <Menu.Item>
                                <NavLink to='/'><HomeOutlined />首页</NavLink>
                            </Menu.Item>
                            <Menu.Item>
                                <NavLink to='/book'><BookOutlined />教程</NavLink>
                            </Menu.Item>
                            <Menu.Item>
                                <NavLink to="/about"><InfoCircleOutlined />关于</NavLink>
                            </Menu.Item>
                        </Menu>
                    </Col>
                    <Row className="pos-a tr0">
                        <Col xs={24} md={0}>
                            <Dropdown overlay={topMenu} placement="bottomRight" trigger={[ 'click', 'touchend' ]}>
                                <Button><UnorderedListOutlined /></Button>
                            </Dropdown>
                        </Col>
                    </Row>
                </Row>
            </Layout.Header>
        )
    }
}