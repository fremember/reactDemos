// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';


// const defaultContextValue = {
//   username: 'fremember'
// }
// export const appContext = React.createContext(defaultContextValue);
// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
// root.render(
//   <React.StrictMode>
//     <appContext.Provider value={ defaultContextValue }>
//       <App />
//     </appContext.Provider>
//   </React.StrictMode>
// );
// reportWebVitals();


import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AppStateProvider } from './AppState'
import reportWebVitals from './reportWebVitals';


const defaultContextValue = {
  username: 'fremember'
}
export const appContext = React.createContext(defaultContextValue);
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AppStateProvider>
      <App />
    </AppStateProvider>
  </React.StrictMode>
);
reportWebVitals();
