import React, { useState, useEffect } from 'react'
import logo from './assets/images/logo.svg'
import Robot from './components/Robot'
import RobotDiscount from './components/RobotDiscount'
import ShoppingCart from './components/ShoppingCart'
import styles from './App.module.css'


interface RobotProp {
    id: string;
    name: string;
    email: string;
}


function App() {
    let [ robots, setRobots ] = useState<Array<RobotProp>>([]),
        [ outcount, setOutcount ] = useState<number>(0),
        [ loading, setLoading ] = useState<boolean>(false),
        [ errorStr, setErrorStr ] = useState<string>('');
       
    // useEffect(() => {
    //     setLoading(true)
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //     .then(response => response.json())
    //     .then(data => {
    //         setRobots(data)
    //         document.title = `数据条数${data.length}`
    //         setLoading(false)
    //     })
    // }, [])
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users'),
                    data = await response.json();
                setRobots(data)
            } catch (e: any) {
                setErrorStr(e.message)
            }
            setLoading(false)
        }
        fetchData()
    }, [])
    return (
        <div className={ styles.app }>
            <div className={ styles.appHeader }>
                <img className={ styles.appLogo } src={ logo } alt="logo" />
                <h1 onClick={ () => setOutcount(outcount + 1) }>Logo { outcount }</h1>
            </div>
            <ShoppingCart />
            { (!errorStr || errorStr !== '') && <div>{ errorStr }</div>  }
            {
                loading ? <div>加载中……</div> :
                <ul className={ styles.robotList }>
                    {
                        robots.map((r: RobotProp, index: number) => 
                            index % 2 === 0 ? (<RobotDiscount id={ r.id } name={ r.name } email={ r.email } key={ r.id } />)
                            :
                            (<Robot id={ r.id } name={ r.name } email={ r.email } key={ r.id } />)
                        )
                    }
                </ul>
            }
        </div>
    );
}

export default App;
