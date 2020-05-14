import React from 'react'

// 1、创建上下文
let MyContext = React.createContext(),
    { Provider, Consumer } = MyContext;

function Child (prop) {
    return (
        <div>Child: { prop.foo }</div>
    )
}

export default class ContextTest extends React.Component {
    render () {
        return (
            <div>
                {/* 使用Provider注入值 */}
                <Provider value={ { foo: 'bar' } }>
                    {/* 第一种方式获取Provider注入的值 */}
                    <Consumer>
                        {
                            value => <Child { ...value } />
                        }
                    </Consumer>
                </Provider>
            </div>
        )
    }
}