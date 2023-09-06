import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './pages/Home.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import A_propos from './pages/A_propos';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Home /> */}
    <A_propos />
  </React.StrictMode>,
)
