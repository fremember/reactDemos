import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import './index.module.css';
import App from './App';
import { MainIndex, Login } from 'views'

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <App /> }>
                    <Route index element={ <MainIndex /> } />
                    <Route path='index' element={ <MainIndex /> } />
                    <Route path="login" element={ <Login /> } />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);