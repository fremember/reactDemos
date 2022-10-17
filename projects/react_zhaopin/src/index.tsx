import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux'
import store from 'stores'

import 'utils/flexible.js'

import 'assets/css/index.css';

// import reportWebVitals from './reportWebVitals';

import { App } from 'pages'

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
// 直接通过create-react-app模式创建的，默认就是StrictMode下。StrticMode默认会执行两次render，来检测你的render函数有没有副作用。
root.render(
    // <React.StrictMode>
    <Provider store={ store }>
        <App />
    </Provider>
    // </React.StrictMode>
);
// reportWebVitals();
