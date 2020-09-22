import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './../view/Home/index'
import Discover from './../view/Discover/index'
import Study from './../view/Study/index'
import User from './../view/User/index'
export default class AppRouter extends Component {
    render () {
        return (
            <Switch>
                <Route path='/' exact render={ () => (<Redirect to='/home' />) } />
                <Route path='/home' component={ Home } />
                <Route path='/discover' component={ Discover } />
                <Route path='/study' component={ Study } />
                <Route path='/user' component={ User } />
            </Switch>
        )
    }
}