import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRouter from './router'
import './main.css'
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
)
