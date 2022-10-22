import React, { useState } from 'react'

import commonStyles from 'assets/css/common.module.css'
import styles from './index.module.scss'

import { Login, Register } from 'pages'

export const UnAuthenticated: React.FC = () => {
	const [ isRegister, setIsRegister ] = useState<boolean>(false),
		changeUnAuthenticatedTab: React.MouseEventHandler<HTMLUListElement> | undefined = (e: React.MouseEvent<HTMLUListElement, MouseEvent>) => {
			if((e.target as HTMLElement).nodeName === 'LI') {
				// console.log(e)
				console.log((e.target as HTMLElement).className)
			}
		};
	return (
		<div className={ `${commonStyles['flex-center']} ${styles.unAuthenticated}` }>
			<section className={ commonStyles.flex} >
				<ul className={ `${commonStyles.flex} ${commonStyles.colorfff} ${styles.tabs}` } onClick={ changeUnAuthenticatedTab }>
					<li className={ !isRegister ? styles.active : '' } data-type=>登录</li>
					<li className={ isRegister ? styles.active : '' }>注册</li>
				</ul>
				{ isRegister ? <Login /> : <Register /> }
				{/* <div className={ `${commonStyles.dib} ${commonStyles.colorfff} ${styles['about-count']}` } onClick={ () => setIsRegister(!isRegister) }>
					{ isRegister ? 
						<p>已经有账号了？<span className={ commonStyles['common-active'] }>直接登录</span></p>
						:
						<p>没有账号？<span className={ commonStyles['common-active'] }>注册新账号</span></p>
					}
				</div> */}
			</section>
		</div>
	)
}







