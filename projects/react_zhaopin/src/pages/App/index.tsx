import React, { useState, useEffect } from 'react';

import { Authenticated, UnAuthenticated } from 'components'
import styles from './index.module.scss';

export const App = () =>  {
    const [ anthFlag, setAuthFlag ] = useState<boolean>(false)

    useEffect(() => {
        let token = localStorage.getItem('token')
        setAuthFlag(!!token)
    }, [])
    return (
        <div className={ styles.App }>
            { anthFlag ? <Authenticated /> : <UnAuthenticated /> }
        </div>
    );
}
