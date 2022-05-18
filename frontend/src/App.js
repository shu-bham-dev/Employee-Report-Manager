import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Header from './components/Header'
import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'
import EmployeeList from './components/EmployeeList'
import PersonalReports from './components/PersonalReports'
import EmployeeReports from './components/EmployeeReports'

import './App.css'

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/employee-list' element={<EmployeeList />} />
          <Route path='/my-reports' element={<PersonalReports />} />
          <Route path='/employee-reports' element={<EmployeeReports />} />
          {/* <Route path='/create-report' element={<EmployeeList />} />
          <Route path='/view-report' element={<EmployeeList />} />
          <Route path='/update-report' element={<EmployeeList />} /> */}
        </Routes>
      </Router>
    </>
  )
}

export default App
