import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Link, Route, Switch, Redirect } from 'react-router-dom'
import { login } from './../store/user.redux'


function Home () {
    return (
        <div>
            <h3>课程列表</h3>
            <ul>
                <li><Link to="/detail/web">Web架构师</Link></li>
                <li><Link to="/detail/python">python架构师</Link></li>
            </ul>
        </div>
    )
}
// 组件嵌套直接发生路由的嵌套
// 传递进来路由器对象
function Detail (params) {
    // console.log(params)
    // history 导航指令
    // location 当前url信息
    // match 获取参数信息
    return (
        <div>
            当前课程：{ params.match.params.course }
            <button onClick={ params.history.goBack }>后退</button>
        </div>
    )
}

function About () {
    return (
        <div>
            <h3>个人中心</h3>
            <ul>
                <li>
                    <Link to="/about/me">个人信息</Link>
                </li>
                <li>
                    <Link to="/about/order">订单查询</Link>
                </li>
            </ul>
            <Switch>
                <Route path="/about/me" component={ Me }/>
                <Route path="/about/order" component={ Order }/>
                <Redirect to="/about/me"></Redirect>
            </Switch>
        </div>
    )
}

function Me () {
    return (
        <div>Me</div>
    )
}
function Order () {
    return (
        <div>Order</div>
    )
}

function NoMatch ({ location }) {
    return (
        <div>404, { location.pathname }不存在</div>
    )
}

// 路由守卫
let PrivateRoute = connect(
    state => ({ isLogin: state.user.isLogin })
)(({ component: Com, isLogin, ...rest }) => {
    return (
        // render:根据条件动态渲染组件
        <Route { ...rest } render={
            props => isLogin ? <Com /> : <Redirect to={{ pathname: '/login', state: { redirect: props.location.pathname } }}/>
        } />
    )
})

// 登录组件
let Login = connect(
    state => (
        {
            isLogin: state.user.isLogin,
            loading: state.user.loading
        }
    ),
    { login }
)(function ({ location, isLogin, login, loading }) {
    let redirect = location.state.redirect || '/'
    if(isLogin) {
        return <Redirect to={ redirect } />
    } else {
        return (
            <div>
                <p>用户登录</p>
                <button onClick={ login } disabled={ loading }>{ loading ? '登录中...' : '登录' }</button>
            </div>
        )
    }
})

export default class RouterSample extends React.Component {
    render () {
        return (
        <div>
            <BrowserRouter>
                {/* 导航链接 */}
                <ul>
                    <li>
                        <Link to="/">首页</Link>
                    </li>
                    <li>
                        <Link to="/about">关于</Link>
                    </li>
                </ul>
                {/* 路由配置 */}
                {/* 路由匹配默认是包容性质，使用switch实现单一匹配 */}
                <Switch>
                    <Route exact path="/" component={ Home } />
                    <Route path="/detail/:course" component={ Detail } />
                    {/* <Route path="/about" component={ About } /> */}
                    <PrivateRoute path="/about" component={ About } />
                    <Route path="/login" component={ Login } />
                    <Route component={ NoMatch } />
                </Switch>
            </BrowserRouter>
        </div>
        )
    }
}