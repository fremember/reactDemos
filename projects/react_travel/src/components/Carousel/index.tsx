import React from 'react';
import { Image, Carousel as AntCarousel } from 'antd'

import styles from './index.module.css'

// 数据需要使用接口获取
import carouselImg1 from 'assets/images/carousel_1.jpg'
import carouselImg2 from 'assets/images/carousel_2.jpg'
import carouselImg3 from 'assets/images/carousel_3.jpg'

export const Carousel: React.FC = () => {
    return (
        <AntCarousel autoplay className={ styles.slider }>
            <Image src={ carouselImg1 } />
            <Image src={ carouselImg2 } />
            <Image src={ carouselImg3 } />
        </AntCarousel>
    )
}