import React from 'react'

// Dialog作为容器不关心内容和逻辑
// 等同于vue中的slot
function Dialog (props) {
    // children可以是任意的合法的js表达式
    return <div style={{ border: `1px solid ${ props.color || 'blue' }` }}>{ props.children }</div>
}
// WelcomeDialog通过符合提供内容
function WelcomeDialog (props) {
    return (
        <Dialog { ...props }>
            <h1 style={{ color: 'red' }}>欢迎光临</h1>
            <p>感谢使用react</p>
            <div className="footer">
                { props.footer }
            </div>
        </Dialog>
    )
}
let Api = {
    getUsrer () {
        return { name: 'jerry', age: 20 }
    }
}

function Fether (props) {
    let user = Api[props.name]()
    return props.children(user)
}

// function Filter(props) {
//     console.log(props)
//     return props.children.filter(v => v.type === props.type)
// }

function Filter ({ children, type }) {
    return (
        <div>
            {
                React.Children.map(children, child => {
                    if(child.type !== type) {
                        return
                    }
                    return child
                })
            }
        </div>
    )
}

// 修改内容
function RadioGroup (props) {
    // 给每个孩子的属性中添加name属性
    return (
        <div>
            {
                React.Children.map(props.children, child => {
                    // 注意vDom不能更改，克隆一个新的去改才行
                    return React.cloneElement(child, { name: props.name })
                })
            }
        </div>
    )
}
function Radio ({ children, ...rest }) {
    return (
        <label style={{ marginRight: '30px' }}>
            {/* props中会有name和value属性 */}
            <input style={{ marginRight: '10px' }} type="radio" { ...rest } />
            { children }
        </label>
    )
}

export default class Composition extends React.Component {
    render () {
        let footer = <button onClick={ () => console.log('测试按钮') }>按钮</button>
        return (
            <div>
                <WelcomeDialog color="pink" footer={ footer } />
                {/* Fether组件根据props.children作为函数返回的执行结果来渲染组件 */}
                <Fether name="getUsrer">
                    {/* 这里是一个函数，返回的结果是p元素，已经需要显示的内容 */}
                    { ({ name, age }) => (<p>{ name } - { age }</p>) }
                </Fether>
                {/* 过滤器，可以过滤出指定标签类型 */}
                <Filter type="p">
                    <h1>React</h1>
                    <p>React很不错</p>
                    <h1>Vue</h1>
                    <p>Vue很不错</p>
                </Filter>
                <RadioGroup name="mvvm">
                    <Radio name="vue">vue</Radio>
                    <Radio name="React">React</Radio>
                    <Radio name="ng4">ng4</Radio>
                </RadioGroup>
            </div>
        )
    }
}