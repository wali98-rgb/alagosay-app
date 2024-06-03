
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/admin/Home'
import Konten from './pages/admin/Kontent'
import PublicUser from './pages/public/PublicUser'
import Product from './pages/admin/produk/Product'
import AddProduct from './pages/admin/produk/AddProduct'
import UpdateProduct from './pages/admin/produk/UpdateProduct'
import ShowProduct from './pages/admin/produk/ShowProduct'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<PublicUser />} />
        <Route path='/4dm1n' element={<Home />} />
        <Route path='/4dm1n/product' element={<Product />} />
        <Route path='/4dm1n/product/add' element={<AddProduct />} />
        <Route path='/4dm1n/product/edit/:id' element={<UpdateProduct />} />
        <Route path='/4dm1n/product/show/:id' element={<ShowProduct />} />
        <Route path='/4dm1n/konten' element={<Konten />} />
      </Routes>
    </>
  )
}

export default App
