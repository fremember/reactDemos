import React from 'react'
import { Image, Typography } from 'antd'

interface PropsType {
    id: string | number;
    size: "large" | "small";
    imageSrc: string;
    price: number | string;
    title: string;
}

export const ProductImage: React.FC<PropsType> = ({ id, size, imageSrc, price, title }) => {
    return (
        <>
            {
                size === 'large' ?
                (<Image src={ imageSrc } width={ 490 } height={ 285 } />)
                :
                (<Image src={ imageSrc } width={ 240 } height={ 120 } />)
            }
            <div>
                <Typography.Text type="secondary">{ title.slice(0, 25) }</Typography.Text>
                <Typography.Text type="danger" strong>¥ { price } 起</Typography.Text>
            </div>
        </>
    )
}