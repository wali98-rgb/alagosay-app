import React, { useEffect, useState } from 'react'
import MainLayout from '../../../layouts/MainLayout'
import { Link } from 'react-router-dom'
import axios from 'axios'
import api from '../../../axios/api'

import '../../../assets/css/pages/Product.css'

const Product = () => {
    const [product, setProduct] = useState([])

    useEffect(() => {
        getProducts()
    }, [])

    const getProducts = async () => {
        const response = await axios.get("http://localhost:3001/product")
        setProduct(response.data)
    }

    return (
        <MainLayout>
            <section className="c7Nt">
                <div className="c7Nt7l">
                    <h2>Produk</h2>
                    <span>Produk / <Link to={'/4dm1n/product'}><i className="bi bi-journal-richtext"></i></Link></span>
                </div>

                <div className="c7Ntcx">
                    <div className="c7NtcxTl">
                        <Link to={'/4dm1n/product/add'} className='btn btn-success'>Tambah Produk</Link>
                    </div>

                    <div className="c7Ntcx13y">
                        <div className="c7c0R">
                            {
                                product.map(item => (
                                    <div className="c7c4R card" style={{ width: '18rem' }} key={item.id}>
                                        <div className="c7c4rIm p-2">
                                            <img src={item.url} className="card-img-top" alt={item.photo} />
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">{item.flavor}</h5>
                                            <h6 className="card-subtitle mb-2 text-body-secondary">Rp.{item.price}</h6>
                                            <p className="card-text">{item.description}</p>
                                        </div>
                                        <div className="card-footer d-flex justify-content-between">
                                            <a href="#" className="col-3 mx-1 btn btn-success"><i className="bi bi-view-list"></i></a>
                                            <a href="#" className="col-3 mx-1 btn btn-primary"><i className="bi bi-pencil-square"></i></a>
                                            <a href="#" className="col-3 mx-1 btn btn-danger"><i className="bi bi-trash3"></i></a>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>
        </MainLayout>
    )
}

export default Product
