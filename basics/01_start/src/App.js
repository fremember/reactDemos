import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// import { Welcome1, Welcome2 } from './components/CompType'
// import Clock from './components/Clock'
// import CartSample from './components/CartSample'
// import Lifecycle from './components/Lifecycle'

import AntdTest from './components/AntdTest'
import CommentList from './components/CommentList'
import Hoc from './components/Hoc'
import Composition from './components/Composition'
import HookText from './components/HookTest'
import ContextTest from './components/ContextTest'
import ContextTest2 from './components/ContextTest2'
import ContextTest3 from './components/ContextTest3'
import KForm from './components/KForm'
import ReduxTest from './components/ReduxTest'


// let user = { firstName: 'peng', lastName: 'xiangyang' }
// function formatName (user) {
//   return [user.firstName, user.lastName].join(' ')
// }
class App extends Component {
  // state = { prop: 'abc' }
  // componentDidMount () {
  //   setTimeout(() => {
  //     this.setState({ props: 'def' })
  //   }, 2000)
  // }
  render () {
    // let name = 'jerry'
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <div>{ name }</div>
      //     <div>{ formatName(user) }</div>
      //     <img className="App-logo" src={logo} alt="logo" />
      //     <Welcome1 name="fremember" />
      //     <Welcome2 name="pxy" />
      //     <Clock />
      //     <Clock title={formatName(user)} />
      //     <Clock text="abcd" />
      //     <hr />
      //     <CartSample />
      //     <Lifecycle prop={ this.state.prop } />
      //   </header>
      // </div>
      <div>
        <AntdTest />
        <CommentList />
        <Hoc />
        <Composition />
        <hr />
        <HookText />
        <ContextTest />
        <ContextTest2 />
        <ContextTest3 />
        <KForm />
        <ReduxTest />
      </div>
    )
  }
}

export default App;
