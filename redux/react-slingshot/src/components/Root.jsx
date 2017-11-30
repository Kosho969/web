import React from 'react'
import { Provider } from 'react-redux';
import App from './App.jsx'


const Root = (props) => (
  <Provider store={props.store}>
    <App count={1} />
  </Provider>
)


export default Root
