// == Base:
import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
// == Component:
import App from "./App"
// === Checking img for WebP format:
import './testWebP'
// == State:
import store from "./redux/store"
import state from "./state"

ReactDOM.render(
  <Provider store={store} >
    <React.StrictMode>
      <App state={state} />
    </React.StrictMode>
  </Provider >,
  document.getElementById('root')
)