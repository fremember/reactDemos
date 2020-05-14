import React from 'react'

// 1、创建上下文
let MyContext = React.createContext(),
    { Provider } = MyContext;

// 使用class指定静态contextType
class Child3 extends React.Component {
    static contextType = MyContext
    render () {
        return (
            // 这里必须使用this.context来获取变量
            <div>Child3: { this.context.foo }</div>
        )
    }
}

export default class ContextTest extends React.Component {
    render () {
        return (
            <div>
                {/* 使用Provider注入值 */}
                <Provider value={ { foo: 'bar' } }>
                   <Child3 />
                </Provider>
            </div>
        )
    }
}