
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/admin/Home'
import Konten from './pages/admin/Kontent'
import PublicUser from './pages/public/PublicUser'
import Product from './pages/admin/produk/Product'
import AddProduct from './pages/admin/produk/AddProduct'
import UpdateProduct from './pages/admin/produk/UpdateProduct'
import ShowProduct from './pages/admin/produk/ShowProduct'
import Kontak from './pages/admin/Kontak'
import About from './pages/admin/About'
import AddTestimony from './pages/admin/testimony/AddTestimony'

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
        <Route path='/4dm1n/konten/testimony/add' element={<AddTestimony />} />
        <Route path='/4dm1n/Kontak' element={<Kontak />} />
        <Route path='/4dm1n/About' element={<About />} />
      </Routes>
    </>
  )
}

export default App
