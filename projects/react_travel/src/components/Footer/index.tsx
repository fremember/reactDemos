import React from 'react';
import { Layout, Typography } from 'antd';
import commonStyles from 'assets/css/common.module.css'

export const Footer: React.FC = () => {
    return <Layout.Footer className={ commonStyles['flex-center'] } style={{ paddingTop: 10, paddingBottom: 10}}>
        <Typography.Title level={ 5 } style={{ marginBottom: 0 }}>版权所有 @ react 旅游网</Typography.Title>
    </Layout.Footer>
}