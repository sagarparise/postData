import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Store } from './store/Store.jsx'
import StoreProvider from './store/Store.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <StoreProvider store={Store}>
   <App />
   </StoreProvider>
  </React.StrictMode>,
)
