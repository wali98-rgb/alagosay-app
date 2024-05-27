import React from 'react'
import MainLayout from '../../layouts/MainLayout'

import '../../assets/css/pages/Home.css'
import { Link } from 'react-router-dom'
import Chart from '../../components/Chart'

const Home = () => {
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
                                <h3>0</h3>
                                <p>Produk</p>
                            </div>
                            <div className="d4Cam42">
                                <i className="bi bi-bag"></i>
                            </div>
                        </div>

                        <div className="d4Cac74">
                            <Link>Selengkapnya <i className="bi bi-arrow-right-circle"></i></Link>
                        </div>
                    </div>

                    <div className="c7Ntd4Ca_">
                        <div className="d4Ca7l">
                            <p>Total Produk:</p>
                        </div>

                        <div className="d4Cam4">
                            <div className="d4Cam41">
                                <h3>0</h3>
                                <p>Produk</p>
                            </div>
                            <div className="d4Cam42">
                                <i className="bi bi-bag"></i>
                            </div>
                        </div>

                        <div className="d4Cac74">
                            <Link>Selengkapnya <i className="bi bi-arrow-right-circle"></i></Link>
                        </div>
                    </div>

                    <div className="c7Ntd4Ca_">
                        <div className="d4Ca7l">
                            <p>Total Produk:</p>
                        </div>

                        <div className="d4Cam4">
                            <div className="d4Cam41">
                                <h3>0</h3>
                                <p>Produk</p>
                            </div>
                            <div className="d4Cam42">
                                <i className="bi bi-bag"></i>
                            </div>
                        </div>

                        <div className="d4Cac74">
                            <Link>Selengkapnya <i className="bi bi-arrow-right-circle"></i></Link>
                        </div>
                    </div>
                </div>

                <div className="cH412t">
                    <Chart />
                </div>

                <div className="c7Ntcx">
                    <div className="c7NtcxTl">
                        <Link to={'/add'} className='btn btn-success'>Tambah Produk</Link>
                    </div>

                    <div className="c7Ntcx13y">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Foto</th>
                                    <th scope="col">Rasa</th>
                                    <th scope="col">Deskripsi</th>
                                    <th scope="col">Harga</th>
                                    <th scope="col">Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td>@mdo</td>
                                    <td>
                                        <Link><i className="bi bi-pencil-square"></i></Link>
                                        <Link><i className="bi bi-trash3"></i></Link>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </MainLayout>
    )
}

export default Home
