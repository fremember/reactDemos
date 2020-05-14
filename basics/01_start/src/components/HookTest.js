import React, { useState, useEffect } from 'react'

// 自定义hook是一个函数，名称用use开头函数内部可以调用其他钩子
function useAge () {
	let [ age, setAge ] = useState(0)
	useEffect(() => {
		setTimeout(() => {
			setAge(20)
		}, 2000)
	})
	return age
}
export default function HookText () {
	// 单一状态
	// useState是一个方法，里面的参数是初始状态值，
	// useState返回一个数组，结构出来后，count表示状态值，setCount表示设置状态的函数
	let [ count, setCount ] = useState(0),

	// 多个状态
		// [ age ] = useState(20),
		age = useAge(),
		[ fruit, setFruit ] = useState('banana'),
		[ input, setInput ] = useState(''),
		[ fruits, setFruits ] = useState([ 'apple', 'banana' ]);
	// 副作用钩子会在每次渲染时都执行
	useEffect(() => {
		console.log(`您点击了${count}次`)
	})

	// 如果仅打算执行一次，传递第二个参数为[]
	useEffect(() => {
		console.log('只执行一次')
	}, [])

	// 给副作用钩子指定依赖，只有该依赖更新的时候才会执行
	// 第二个参数可以设置多个依赖，用逗号隔开
	useEffect(() => {
		console.log('依赖是count')
	}, [count])
	return (
		<div>
			<p>点击了{ count }</p>
			{/* 点击事件的时候，直接使用尖头函数来设置属性值 */}
			<button onClick={ () => setCount(count + 1) }>点击</button>
			<p>年龄：{ age }</p>
			<p>选择的水果：{ fruit }</p>
			<p>
				<input type="text" value={ input } onChange={ e => setInput(e.target.value) } />
				<button onClick={ () => setFruits([ ...fruits,  input]) }>新增水果</button>
			</p>
			<ul>
				{
					fruits.map(f => (
						<li key={ f } onClick={ () => setFruit(f) }>{ f }</li>
					))
				}
			</ul>
		</div>
	)
}