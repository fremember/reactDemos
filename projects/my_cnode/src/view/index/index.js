import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Row, Col } from 'antd';
import RouterList from '../../router/index';
import './index.css'
let subMenu = [
    { item: '全部', path: '/index/all' },
    { item: '精华', path: '/index/good' },
    { item: '问答', path: '/index/ask' },
    { item: '分享', path: '/index/share' },
    { item: '招聘', path: '/index/job' },
    { item: '测试', path: '/index/dev' },
]

export default class Index extends Component {
    render () {
        return (
            <Row className="main-wrap">
                <Col xs={24} md={6}>
                    <nav className="pos-r sub-nav">
                        {
                            subMenu.map((item, index) => {
                                return <NavLink className="tac" to={ item.path } activeClassName="active" key={ index }>{ item.item }</NavLink>
                            })
                        }
                    </nav>
                </Col>
                <RouterList />
            </Row>
        )
    }
}