import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card, Tag, Avatar } from 'antd';
import axios from 'axios';
import ReplyList from './replies';
import './../../common/css/com.css'

let tabSchema = {
    all: '全部',
    good: '精华',
    share: '分享',
    ask: '问答',
    job: '招聘',
    dev: '测试'
};
class Details extends Component {
    constructor (arg) {
        super(arg)
        let id = this.props.match.params.id
        this.state = {
            id,
            data: this.props.data.data,
            loading: this.props.loading
        }
        this.update(id)
    }
    UNSAFE_componentWillReceiveProps (nextProps) {
        this.setState({
            data: nextProps.data.data,
            loading: nextProps.loading
        })
    }
    update (id) {
        this.props.dispatch((dispatch) => {
            dispatch({
                type: 'Details_UPDATE'
            })
            axios.get(`https://cnodejs.org/api/v1/topic/${id}`)
            .then(res => {
                dispatch({
                    type: 'Details_SUCC',
                    data: res
                })
            })
            .catch(err => {
                dispatch({
                    type: 'Details_ERROR'
                })
            })
        })
    }
    render () {
        let { data, loading } = this.state,
            { reply_count, replies } = data,
            Title = (
                <div>
                    <h2>{ data.title }</h2>
                    <div style={ { display: 'flex', alignItems: 'center' } }>
                        <Tag
                            color={
                                data.top ? 'magenta' : data.good ? 'green' : 'geekblue'
                            }
                        >
                            { data.top ? '置顶' : data.good ? '精华' : tabSchema[data.tab] ? tabSchema[data.tab] : '分享' }
                        </Tag>
                        <Avatar src={ data.author.avatar_url } style={{ margin: '0 5px' }} size="small" />
                        <Link to={`/user/${data.author.loginname}`}>{ data.author.loginname }</Link>
                        <span style={{ marginLeft: '5px' }}>发表于：{ data.create_at.split('T')[0] }</span>
                    </div>
                </div>
            )
        return (
            <div className="main-wrap" id="detailWrap">
                <Card loading={ loading } title={ Title }>
                    <div dangerouslySetInnerHTML={
                        { __html: data.content }
                    }></div>
                </Card>
                <ReplyList loading={ loading } reply_count={ reply_count } replies={ replies }></ReplyList>
            </div>
        )
    }
}

export default connect(state => (state.topDetails))(Details)
