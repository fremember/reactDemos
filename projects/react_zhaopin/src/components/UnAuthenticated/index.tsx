import React, { useState } from 'react'

import commonStyles from 'assets/css/common.module.css'
import styles from './index.module.scss'

import { Login, Register } from 'pages'

export const UnAuthenticated: React.FC = () => {
	const [ isRegister, setIsRegister ] = useState<boolean>(false)
	return (
		<div className={ styles.unAuthenticated }>
			<div>{ isRegister ? '请注册' : '请登录' }</div>
			{ isRegister ? <Login /> : <Register /> }
			<div className={ commonStyles.dib } onClick={ () => setIsRegister(!isRegister) }>
				{/* { isRegister ? '已经有账号了？<span>直接登录</span>' : '没有账号？注册新账号' } */}
				{ isRegister ? 
					<p>已经有账号了？<span className={ commonStyles.color08c }>直接登录</span></p>
					:
					<p>没有账号？<span className={ commonStyles.color08c }>注册新账号</span></p>
				}
			</div>
		</div>
	)
}
