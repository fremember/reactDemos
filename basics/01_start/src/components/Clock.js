import React from 'react'

export default class Clock extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date(),
            counter: 1,
            goods: [
                { id: 0, title: 'orange' },
                { id: 1, title: 'apple' }
            ],
            text: ''
        }
        // this.handleChange = this.handleChange.bind(this)// 第一种方式写方法的第一步
        this.handleAdd = this.handleAdd.bind(this)
    }
    // state = { date: new Date() }

    componentDidMount () {
        this.timer = setInterval(() => {
            this.setState({ date: new Date() })
        }, 1000)

        this.setState(state => ({
            counter: state.counter + 1// 2
        }))
        this.setState(state => {
            return { counter: state.counter + 1 }// 3
        })
    }
    componentWillUnmount () {
        clearInterval(this.timer)
    }
    // 第一种方式写方法的第二步
    // handleChange (e) {
    //     this.setState({ text: e.target.value })
    //     e.preventDefault()
    // }

    // 第二种方式写方法
    handleChange = (e) => {
        this.setState({ text: e.target.value })
        e.preventDefault()
    }

    handleAdd () {
        this.setState(state => ({ goods: [ ...state.goods, { id: state.goods.length, title: state.text } ] }), () => {
            this.setState({ text: '' })
        })
    }

    render () {
        return (
            <div>
                <h2>{ this.props.title ? this.props.title : null }</h2>
                <h3>{ this.props.text && this.props.text }</h3>
                <div>{ this.state.date.toLocaleTimeString() }</div>
                <div>{ this.state.counter }</div>
                <div>
                    <input type="text" value={ this.state.text } onChange={ this.handleChange } />
                    <input type="button" value="添加" onClick={ this.handleAdd } />
                </div>
                <ul>
                    {
                        this.state.goods.map(good => 
                            <li key={good.id}>{ good.title }</li>
                        )
                    }
                </ul>
            </div>
        )
    }
}