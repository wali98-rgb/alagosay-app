
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/admin/Home'
import Konten from './pages/admin/Kontent'
import PublicUser from './pages/public/PublicUser'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<PublicUser />} />
        <Route path='/4dm1n' element={<Home />} />
        <Route path='/4dm1n/konten' element={<Konten />} />
      </Routes>
    </>
  )
}

export default App
