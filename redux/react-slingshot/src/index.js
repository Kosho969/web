// Set up your application entry point here...
// 

import React from 'react'
import ReactDom from 'react-dom'
import Root from './components/Root'
import store from './store/configureStore'

ReactDom.render(
  <Root store={store} />,
  document.getElementById('app')
)
