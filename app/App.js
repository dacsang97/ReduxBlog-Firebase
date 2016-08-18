import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Router, hashHistory } from 'react-router'
import Routes from './Routes'
import reducers from './reducers'

const createStoreWithMiddleware = applyMiddleware()(createStore)
const App = () => {
  return (
    <Provider store={createStoreWithMiddleware(reducers)}>
      <Router history={hashHistory} routes={Routes}/>
    </Provider>
  )
}

export default App
