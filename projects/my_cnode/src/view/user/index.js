import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Avatar, Row, Col } from 'antd';
import UserList from './userList';
import axios from 'axios';

class User extends Component {
    constructor (arg) {
        super(arg);
        let { data, loading } = this.props,
            loginname = this.props.match.params.id;
        this.state = {
            loading: loading,
            loginname,
            avatar: data.data.avatar_url,
            score: data.data.score,
            create_at: data.data.create_at,
            recent_topics: data.data.recent_topics,
            recent_replies: data.data.recent_replies
        }
        this.update(loginname)
    }
    update (loginname) {
        this.props.dispatch((dispatch) => {
            dispatch({
                type: 'USER_UPDATE'
            })
            axios.get(`https://cnodejs.org/api/v1/user/${loginname}`)
            .then(res => {
                dispatch({
                    type: 'USER_SUCC',
                    data: res
                })
            })
            .catch(err => {
                dispatch({
                    type: 'USER_ERROR',
                    data: err
                })
            })
        })
    }
    UNSAFE_componentWillReceiveProps (nextprops) {
        let loginname = nextprops.match.params.id
        if(loginname !== this.state.loginname) {
            this.setState({
                loginname
            })
            this.update(loginname)
            return false
        }
        let { loading, data } = nextprops
        this.setState({
            loading: loading,
            avatar: data.data.avatar_url,
            score: data.data.score,
            create_at: data.data.create_at,
            recent_topics: data.data.recent_topics,
            recent_replies: data.data.recent_replies
        })
    }
    render () {
        let { loading, loginname, avatar, score, create_at, recent_topics, recent_replies } = this.state,
            Title = (
                <div>
                    <Avatar src={ avatar } className="user-avatar" />
                    <Row className="user-info">
                        <Col xs={24} md={8}>
                            { <p>用户名：<span className="like-a">{loginname}</span></p> }
                        </Col>
                        <Col xs={24} md={8}>
                            { <p>积分：<span className="like-a">{score}</span></p> }
                        </Col>
                        <Col xs={24} md={8}>
                            { <p>注册时间：<span className="like-a">{create_at}</span></p> }
                        </Col>
                    </Row>
                </div>
            )
        return (
            <div className="main-wrap">
                <Card title={ Title }></Card>
                <UserList loading={ loading } title="最近创建的话题" data={ recent_topics } />
                <UserList loading={ loading } title="最近回复的话题" data={ recent_replies } />
            </div>
        )
    }
}
export default connect(state => (state.user))(User)