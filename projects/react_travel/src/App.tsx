import React from 'react';
import { Outlet } from "react-router-dom"

import styles from './App.module.css';

import { Header, Footer } from 'components'

function App() {
    return (
        <div className={ styles.App }>
            <Header />
            <section className={ styles['page-content'] }>
                <Outlet />
            </section>
            <Footer />
        </div>
    );
}

export default App;
