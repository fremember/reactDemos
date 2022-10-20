import React, { useState } from 'react'

import commonStyles from 'assets/css/common.module.css'
import styles from './index.module.scss'

import { Login, Register } from 'pages'

export const UnAuthenticated: React.FC = () => {
	const [ isRegister, setIsRegister ] = useState<boolean>(false)
	return (
		<div className={ `${commonStyles['flex-center']} ${styles.unAuthenticated}` }>
			<section className={ commonStyles.flex} >
				<div className={ `${styles.title} ${commonStyles['common-active']}` }>{ isRegister ? '请注册' : '请登录' }</div>
				{ isRegister ? <Login /> : <Register /> }
				<div className={ commonStyles.dib } onClick={ () => setIsRegister(!isRegister) }>
					{ isRegister ? 
						<p>已经有账号了？<span className={ commonStyles['common-active'] }>直接登录</span></p>
						:
						<p>没有账号？<span className={ commonStyles['common-active'] }>注册新账号</span></p>
					}
				</div>
			</section>
		</div>
	)
}
