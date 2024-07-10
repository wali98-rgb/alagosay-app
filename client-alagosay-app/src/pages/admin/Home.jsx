import React, { useEffect, useState } from 'react'
import MainLayout from '../../layouts/MainLayout'

import '../../assets/css/pages/Home.css'
import { Link } from 'react-router-dom'
import Chart from '../../components/Chart'
import axios from 'axios'

const Home = () => {
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
                    <h2>Dashboard</h2>
                    <span>Dashboard / <Link to={'/4dm1n'}><i className="bi bi-house"></i></Link></span>
                </div>

                <div className="c7Ntd45hx">
                    <div className="c7Ntd4Ca_">
                        <div className="d4Ca7l">
                            <p>Total Produk:</p>
                        </div>

                        <div className="d4Cam4">
                            <div className="d4Cam41">
                                <h3>4</h3>
                                <p>Produk</p>
                            </div>
                            <div className="d4Cam42">
                                <i className="bi bi-bag"></i>
                            </div>
                        </div>

                        <div className="d4Cac74">
                            <Link to={'/4dm1n/product'}>Selengkapnya <i className="bi bi-arrow-right-circle"></i></Link>
                        </div>
                    </div>

                    <div className="c7Ntd4Ca_">
                        <div className="d4Ca7l">
                            <p>Total Rasa Produk:</p>
                        </div>

                        <div className="d4Cam4">
                            <div className="d4Cam41">
                                <h3>4</h3>
                                <p>Rasa</p>
                            </div>
                            <div className="d4Cam42">
                                <i className="bi bi-bag"></i>
                            </div>
                        </div>

                        <div className="d4Cac74">
                            <Link to={'/4dm1n/product'}>Selengkapnya <i className="bi bi-arrow-right-circle"></i></Link>
                        </div>
                    </div>
                </div>

                {/* <div className="cH412t">
                    <Chart />
                </div> */}

                <div className="c7Ntcx">
                    <div className="c7NtcxTl">
                        <Link to={'/4dm1n/product/add'} className='btn btn-success'>Tambah Produk</Link>
                    </div>

                    <div className="c7Ntcx13y">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Foto</th>
                                    <th width="150px" scope="col">Rasa</th>
                                    <th scope="col">Deskripsi</th>
                                    <th scope="col">Harga</th>
                                    <th scope="col">Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    product.map((item, index) => (
                                        <tr key={item.id}>
                                            <th>{index + 1}</th>
                                            <td><img style={{ width: '100%', height: '5rem', objectFit: 'contain' }} src={item.url} alt="" /></td>
                                            <td>{item.flavor}</td>
                                            <td>{item.description}</td>
                                            <td>Rp.{item.price}</td>
                                            <td>
                                                <Link style={{ padding: '.8rem 1.4rem' }} to={`/4dm1n/product/edit/${item.id}`} className="col-3 mx-1 btn btn-primary d-flex justify-content-center align-items-center"><i className="bi bi-pencil-square"></i></Link>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </MainLayout>
    )
}

export default Home
