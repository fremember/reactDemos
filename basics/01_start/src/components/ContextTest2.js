import React, { useContext } from 'react'

// 1、创建上下文
let MyContext = React.createContext(),
    { Provider } = MyContext;

// 使用hook
function Child2 (prop) {
    let ctx = useContext(MyContext)// 这里获取的就是Provider里面的value的值
    return (
        <div>Child2: { ctx.foo }</div>
    )
}

export default class ContextTest extends React.Component {
    render () {
        return (
            <div>
                {/* 使用Provider注入值 */}
                <Provider value={ { foo: 'bar' } }>
                   <Child2 />
                </Provider>
            </div>
        )
    }
}