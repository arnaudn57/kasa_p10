import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import Home from './pages/Home.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import A_propos from './pages/A_propos';
import Logement from './pages/Logement'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route exact path="/a_propos" element={<A_propos />} />
            <Route path="/logement" element={<Logement />} />
            <Route path="/logement/:id" element={<Logement />} />
        </Routes>
    </Router>
  </React.StrictMode>,
)
