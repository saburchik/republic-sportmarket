import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import { Provider } from 'react-redux'
import store from './redux/store'
import state from './state'

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App state={state} />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
)

