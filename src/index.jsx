import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App.jsx'
import reportWebVitals from './reportWebVitals'
import { Provider } from 'react-redux'
import store from './redux/store'


ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('app')
)

reportWebVitals()
