import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { store } from './store/store.js'
import { Provider } from 'react-redux'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  // Do barr jo api call hoti hai vo "React.StrictMode" ki wajah se hoti hai ye check krta hai response ko dono barr k aur vo response same hone chaiye
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <Provider store={store}>
    <App />
  </Provider>
)
