import React from 'react';
import MainHeader from './MainHeader/MainHeader';
import MainFooter from './MainFooter/MainFooter';
import RouterIndex from '../router/router';
import './../common/css/com.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <MainHeader />
      <main className="pos-f tl0 main">
        <RouterIndex />
      </main>
      <MainFooter />
    </div>
  );
}

export default App;
