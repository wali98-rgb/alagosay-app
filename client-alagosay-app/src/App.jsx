import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/admin/Home'
import PublicUser from './pages/public/PublicUser'
import Product from './pages/admin/produk/Product'
import AddProduct from './pages/admin/produk/AddProduct'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<PublicUser />} />
        <Route path='/4dm1n' element={<Home />} />
        <Route path='/4dm1n/product' element={<Product />} />
        <Route path='/4dm1n/product/add' element={<AddProduct />} />
      </Routes>
    </>
  )
}

export default App
