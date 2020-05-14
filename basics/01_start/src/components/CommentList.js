import React from 'react'

// 容器组件
export default class CommentList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            comments: []
        }
    }
    componentDidMount () {
        setInterval(() => {
            this.setState({
                comments: [
                    { body: 'react is very good', author: 'facebook' },
                    { body: 'vue is very good', author: 'youyuxi' }
                ]
            })
        }, 1000)
    }
    render () {
        return (
            <div>
                {
                    // 不解决多次执行render或者第一种解决多次执行render
                    // this.state.comments.map((c, i) => (
                    //     <Comment key={ i } data={ c } />
                    // ))

                    // 第二、三种解决多次执行render
                    this.state.comments.map((c, i) => (
                        <Comment key={ i } { ...c } />
                    ))
                }
            </div>
        )
    }
}

// 展示组件，这样会多次执行render
// function Comment ({ data }) {
//     return (
//         <div>
//             <p>{ data.body }</p>
//             <p> --- { data.author }</p>
//         </div>
//     )
// }

// 第一种解决多次执行render
// class Comment extends React.Component {
//     shouldComponentUpdate (nextProps) {
//         if(nextProps.data.body === this.props.data.body && nextProps.data.author === this.props.data.author) {
//             return false
//         } else {
//             return true
//         }
//     }
//     render () {
//         console.log('render comment')
//         return (
//             <div>
//                 <p>{ this.props.data.body }</p>
//                 <p> --- { this.props.data.author }</p>
//             </div>
//         )
//     }
// }

// 第二种解决多次执行render
// 这种方式只能传入值类型的数据，或者你可以确定传入的数据引用地址没有改变，而且数据只能有一层
// class Comment extends React.PureComponent {
//     render () {
//         console.log('render comment')
//         return (
//             <div>
//                 <p>{ this.props.body }</p>
//                 <p> --- { this.props.author }</p>
//             </div>
//         )
//     }
// }

// 第三种解决多次执行render
// memo高阶组件
let Comment = React.memo((props) => {
    console.log('render comment')
    return (
        <div>
            <p>{ props.body }</p>
            <p> --- { props.author }</p>
        </div>
    )
})