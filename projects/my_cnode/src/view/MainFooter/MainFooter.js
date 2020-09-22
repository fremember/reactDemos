import React, { Component } from 'react';
import { Layout } from 'antd';
import './MainFooter.css'
export default class MainFooter extends Component {
    render () {
        return (
            <Layout.Footer className="pos-f bl0 w100 footer">
                <p className="mb-12px">微信：18769567910，邮箱：18769567910@163.com</p>
                <p>2020-2021 fremember提供技术支持 版权所有 &copy; 翻版必究</p>
            </Layout.Footer>
        )
    }
}