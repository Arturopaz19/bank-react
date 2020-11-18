import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css'
import AppRouter from './containers/router/AppRouter'
import { Provider } from 'react-redux'
import STORE from './redux/store'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  <Provider store={STORE}>
    <Router>
      <AppRouter />
    </Router>
  </Provider>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
