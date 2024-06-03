import React, { useEffect, useState } from 'react'
import MainLayout from '../../../layouts/MainLayout'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

const ShowProduct = () => {
    const [product, setProduct] = useState()

    const { id } = useParams()

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/product/${id}`)
                setProduct(response.data)
            } catch (error) {
                console.log(error);
            }
        }

        fetchProduct()
    }, [])

    // if (!product) {
    //     return (
    //         <div className="d-flex justify-content-center align-items-center min-vh-100">
    //             <div className="spinner-border" role="status">
    //                 <span className="visually-hidden">Loading...</span>
    //             </div>
    //         </div>
    //     )
    // }

    return (
        <MainLayout>
            <div className="c7Nt">
                <div className="c7Nt7l">
                    <h2>Produk</h2>
                    <span>Produk / <Link to={'/4dm1n/product'}><i className="bi bi-journal-richtext"></i></Link></span>
                </div>

                <div className="c7Ntcx">
                    <div className="c7NtcxTl">
                        <Link to={'/4dm1n/product'} className='btn btn-danger'>Kembali</Link>
                    </div>

                    <div className="c7Nt5oW pt-3">
                        <div className="card mb-3" style={{ maxWidth: '100%' }}>
                            <div className="row g-0">
                                <div className="col-md-4 p-2">
                                    <img src={product?.url} className="img-fluid rounded-start" alt="Image" />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{product?.flavor}</h5>
                                        <p className="card-text">{product?.description}</p>
                                        <p className="card-text"><small className="text-body-secondary">Rp.{product?.price}</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout >
    )
}

export default ShowProduct
