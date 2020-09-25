import React, { Component } from 'react';
import { Card } from 'antd';
import './index.css'
export default class ViewTemplate extends Component {
    render () {
        let data = this.props.data;
        return (
            <div className="book-wrapper">
                {
                    data.map(item => {
                        return (
                            <Card
                                className={ item.className }
                                key={ item.title }
                                title={ item.title }
                                type="inner"
                            >
                                <div dangerouslySetInnerHTML={ {
                                    __html: item.content
                                } }></div>
                            </Card>
                        )
                    })
                }
            </div>
        )
    }
}