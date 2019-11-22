// import React from 'react';
// import { render } from 'react-dom'

// import App from './App'
// import store from "./store"

// window.store = store
// render(
//   <App store = {store} />,
//   document.querySelector('#root')
// )
import React from "react"
import {render} from "react-dom"
import store from "./store"
import App from './App'
import {Provider} from "react-redux"
// Provider首字母大写
render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.querySelector("#root")
)