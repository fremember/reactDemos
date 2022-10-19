import React from 'react'
import { Row, Col, Divider } from 'antd'

import { ProductImage } from 'components'

import styles from './index.module.css'

interface PropsType {
    title: JSX.Element;
    sideImage: string;
    products: any[];
}
interface ProductColType {
    idx: number | string;
    product: any[]
}

const ProductCol: React.FC<ProductColType> = ({ idx, product }) => {
    return <>
        {
            product.map((prod, prodIndex) => 
                <Col span={ 24 / product.length } key={ `${idx}_${prodIndex}` }>
                    <ProductImage
                        id={ prod.id }
                        size={ prod.size }
                        title={ prod.title }
                        imageSrc={ prod.touristRoutePictures[0].url }
                        price={ prod.price }
                    />
                </Col>
            )
        }
    </>
}


export const ProductCollection: React.FC<PropsType> = ({ title, sideImage, products }) => {
    return (
        <div className={ styles.content }>
            <Divider orientation="left">{ title }</Divider>
            <Row>
                <Col span={ 4 }>
                    <img className={ styles['side-image'] } src={ sideImage } alt="" />
                </Col>
                <Col span={ 20 }>
                    {
                        products.map((product, index) => (
                            <Row key={ index }>
                                {
                                    product.every(prod => Array.isArray(prod)) ? 
                                    product.map((prod, prodIndex) => 
                                        <Col span={24 / product.length} key={ `${index}_${prodIndex}` }>
                                            {
                                                prod.every(pro => Array.isArray(pro)) ?
                                                prod.map((pro, proIndex) => 
                                                    <Row key={ `${index}_${prodIndex}_${proIndex}` }>
                                                        {
                                                            <ProductCol product={ pro } idx={ `${index}_${proIndex}` } />
                                                        }
                                                    </Row>
                                                )
                                                :
                                                <ProductCol product={ prod } idx={ index } />
                                            }
                                        </Col>
                                    )
                                    :
                                    <ProductCol product={ product } idx={ index } />
                                }
                            </Row>
                        ))
                    }
                </Col>
            </Row>
        </div>
    )
}