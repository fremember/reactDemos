import React, { Component } from 'react';
import data from './data';
import ViewTemplate from '../template/index'
export default class Book extends Component {
    render () {
        return (
            <ViewTemplate data={ data } />
        )
    }
}