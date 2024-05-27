import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/admin/Home'
import PublicUser from './pages/public/PublicUser'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<PublicUser />} />
        <Route path='/4dm1n' element={<Home />} />
      </Routes>
    </>
  )
}

export default App
