import React from 'react'
import styles from './index.css'
import { Link } from 'umi'

export default () => {
  return (
    <div>
      <h1 className={styles.title}>
        <Link to='/users'>登录</Link>
        <Link to='/goods'>商品</Link>
      </h1>
    </div>
  );
}
