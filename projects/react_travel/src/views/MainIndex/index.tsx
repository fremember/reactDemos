import React from 'react';
import { Row, Col, Typography } from 'antd';

import { SideMenu, Carousel, ProductCollection } from 'components'

import { productList1, productList2, productList3 } from './mockups'
import sideImage from 'assets/images/sider_2019_02-04.png'
import sideImage2 from 'assets/images/sider_2019_02-04-2.png'
import sideImage3 from 'assets/images/sider_2019_12-09.png'

export const MainIndex: React.FC = () => {
    const productList: any[] = [// 数据通过接口获取
        { title: '爆款推荐', products: productList1, sideImage: sideImage, type: 'warning', id: 1 },
        { title: '新品上市', products: productList2, sideImage: sideImage2, type: 'danger', id: 2 },
        { title: '国内游推荐', products: productList3, sideImage: sideImage3, type: 'success', id: 3 }
    ]
    return <>
        <Row style={{ marginTop: 20 }}>
            <Col span={ 6 }>
                <SideMenu />
            </Col>
            <Col span={ 18 }>
                <Carousel />
            </Col>
        </Row>
        {
            productList.map(product => (
                <ProductCollection
                    key={ product.id }
                    title={ <Typography.Title level={ 3 } type={ product.type }>{ product.title }</Typography.Title> }
                    sideImage={ product.sideImage }
                    products={ product.products }
                />
            ))
        }
    </>
}