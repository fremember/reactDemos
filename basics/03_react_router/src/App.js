import React, { Component } from 'react'
import { Provider } from 'react-redux'
import RouterSample from './components/RouterSample'

import store from './store/index'

class App extends Component {
  render () {
    return (
      <div>
        <Provider store={ store }>
          <RouterSample />
        </Provider>
      </div>
    )
  }
}

export default App;
