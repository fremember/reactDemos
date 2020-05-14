import React from 'react'

// 高阶组件
// 是一个函数，他的参数是一个组件，函数的返回的结果也是一个组件，但是这个返回的组件是经过加工过的组件

// 第一种写法
// let withKaikeba = Comp => {
//     // 获取name
//     let name = '高阶组件'
//     return props => <Comp { ...props } name={ name }></Comp>// 扩展name属性
// }

// 第二种写法

let withKaikeba = Comp => {
    let name = '高阶组件'
    console.log('可以在这里修改生命周期钩子函数')
    return class NewKaikeba extends React.Component {// 导出的组件使用类名
    // return class extends React.Component {// 导出的组件可以不用类名
        componentDidMount () {
        }
        render () {
            return (
                <Comp { ...this.props } name={ name } ></Comp>
            )
        }
    }
},
withLog = Comp => {
    console.log(Comp.name + '日志：组件被渲染了')
    return props => <Comp { ...props }></Comp>
}

// 不使用@符号
// 函数型组件
// 展示型组件
// 需求是：stage从属性中获取，但是name从接口中获取，这个时候就需要扩展展示型组件的功能
// function Kaikeba (props) {
//     return (
//         <div>{ props.stage } - { props.name }</div>
//     )
// }

// 从上往下执行
// @符号修饰的只能是类类型的组件
@withLog
@withKaikeba
@withLog
class Kaikeba extends React.Component {
    render () {
        return (
            <div>{ this.props.stage } - { this.props.name }</div>
        )
    }
}
// 不使用@符号
// let NewKaikeba = withLog(withKaikeba(withLog(Kaikeba)))// 使用高阶组件函数来生成一个在父组件中使用的组件



export default class Hoc extends React.Component {
    render () {
        return (
            <div>
                {/* 使用高阶组件成的组件，不使用@符号 */}
                {/* <NewKaikeba stage="React" /> */}
                {/* 使用@符号 */}
                <Kaikeba stage="React" />
            </div>
        )
    }
}