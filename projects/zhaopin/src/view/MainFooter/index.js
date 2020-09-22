import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'antd'
import { HomeOutlined, FundViewOutlined, SolutionOutlined, UserOutlined } from '@ant-design/icons';
import './index.css'
export default class MainFooter extends Component {
    render () {
        return (
            <section className="pos-f bl0 w100 main-footer">
                <Menu mode="horizontal" className="flex">
                    <Menu.Item className="tac flex_1">
                        <NavLink to='/home'><HomeOutlined />首页</NavLink>
                    </Menu.Item>
                    <Menu.Item className="tac flex_1">
                        <NavLink to='/discover'><FundViewOutlined />发现</NavLink>
                    </Menu.Item>
                    <Menu.Item className="tac flex_1">
                        <NavLink to='/discover'><SolutionOutlined />学习</NavLink>
                    </Menu.Item>
                    <Menu.Item className="tac flex_1">
                        <NavLink to='/user'><UserOutlined />我的</NavLink>
                    </Menu.Item>
                </Menu>
            </section>
        )
    }
}