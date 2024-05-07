import React from 'react'
import './App.css'
import Login from './components/Login/Login.jsx'
import Register from './components/Register/Register.jsx'
import Dashboard from './components/Dashboard/Dashboard.jsx'
import { BrowserRouter as Router } from 'react-router-dom';




const App = () => {
  return (
    <Router>
    <Dashboard></Dashboard>
    </Router>
  )
}

export default App
