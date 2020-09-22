import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { List, Avatar, Tag, Col, Pagination } from 'antd';
import './index.css'
let tabSchema = {
    all: '全部',
    good: '精华',
    share: '分享',
    ask: '问答',
    job: '招聘',
    dev: '测试'
}
class IndexList extends Component {
    constructor(props) {
        super(props)
        let path = this.props.location.pathname.split('/')
        this.state = {
            loading: this.props.loading,
            data: this.props.data,
            page: 1,
            tab: path[path.length - 1]
        }
    }
    componentDidMount () {
        let { tab, page } = this.state
        this.update(tab, page)
    }
    componentWillReceiveProps (nextProps) {
        let path = nextProps.location.pathname.split('/'),
            tab = path[path.length - 1];
        if(tab !== this.state.tab) {
            this.setState({
                tab,
                page: 1
            })
            this.update(tab, 1)
            return false
        }
        this.setState({
            loading: nextProps.loading,
            data: nextProps.data
        })
    }
    update (tab, page) {
        this.props.dispatch((dispatch, getState) => {
            dispatch({
                type: 'TOPLIST_UPDATE'
            })
            axios.get(`https://cnodejs.org/api/v1/topics?tab=${tab}&limit=10&page=${page}`)
            .then(d => {
                dispatch({
                    type: 'TOPLIST_SUCC',
                    data: d
                })
            })
            .catch(err => {
                dispatch({
                    type: 'UPDATE_ERROR'
                })
            })
        })
    }
    render () {
        let { loading, data } = this.state
        return (
            <Col xs={24} md={18} className="index-list">
                <List loading={ loading } dataSource={ data.data } renderItem={(item) => {
                    return (
                        <List.Item actions={[
                            <span style={{marginLeft: "35px"}}>回复: {item.reply_count}</span>, 
                            <span>访问: {item.visit_count}</span>]}
                        key={item.id}>
                            <List.Item.Meta
                                style={{ minWidth: '200px' }}
                                avatar={<Avatar src={item.author.avatar_url} />}
                                title={(<div>
                                    <Tag color={item.top ? 'magenta' : item.good ? 'green' : 'geekblue'}>
                                        { item.top ? '置顶' : item.good ? '精华' : tabSchema[item.tab] ? tabSchema[item.tab] : '分享' }
                                    </Tag>
                                    <Link to={`/details/${item.id}`}>{ item.title }</Link>
                                </div>)}
                                description={ <span>
                                    <Link style={{ marginRight: '16px' }} to={`/user/${item.author.loginname}`}>{ item.author.loginname }</Link>
                                    发表于：{ item.create_at.split('T')[0] }
                                </span> }
                            />
                        </List.Item>
                    )
                }}></List>
                { (!loading && data.data && data.data.length > 0) ? <Pagination showQuickJumper defaultCurrent={ this.state.page } total={ 500 } onChange={ (page) => {
                    this.setState({ page });
                    this.update(this.state.tab, page)
                } } /> : '' }
            </Col>
        )
    }
}

export default connect((state) => (state.topList))(IndexList)