import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className=" px-4 sm:px-10 md:px-12 lg:px-14 min-h-screen bg-gradient-to-br from-[#f5f1eb] via-[#f2f0e9] to-[#dbead7]">
      <Navbar />  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  )
}

export default App