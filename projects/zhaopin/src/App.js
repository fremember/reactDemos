import React from 'react';
import MainFooter from './view/MainFooter/index'
import AppRouter from './router/app'
import './assets/css/com.css'
import './assets/css/app.css'
function App() {
  return (
    <section className="main-app">
      <div className="main-content">
        <AppRouter />
      </div>
      <MainFooter />
    </section>
  );
}

export default App;
