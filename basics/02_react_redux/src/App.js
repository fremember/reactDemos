import React, { Component } from 'react'
import { Provider } from 'react-redux'

import ReactRedux from './components/ReactRedux'
import store from './store/redux'

import ReactReduxMiddlewear from './components/ReactReduxMiddlewear'
import storeMW from './store/reduxMiddlewear'



class App extends Component {
  render () {
    return (
      <div>
        <Provider store={ store }>
          <ReactRedux />
        </Provider>
        <Provider store={ storeMW }>
          <ReactReduxMiddlewear />
        </Provider>
      </div>
    )
  }
}

export default App;