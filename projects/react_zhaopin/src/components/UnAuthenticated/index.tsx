import React, { useState } from 'react'

import styles from './index.module.scss'

import { Login, Register } from 'pages'

export const UnAuthenticated: React.FC = () => {
	const [ isRegister, setIsRegister ] = useState<boolean>(false)
	return (
		<div className={ styles.unAuthenticated }>
			<div>{ isRegister ? '请注册' : '请登录' }</div>
			{ isRegister ? <Login /> : <Register /> }
			<p onClick={ () => setIsRegister(!isRegister) }>{ isRegister ? '已经有账号了？直接登录' : '没有账号？注册新账号' }</p>
		</div>
	)
}
