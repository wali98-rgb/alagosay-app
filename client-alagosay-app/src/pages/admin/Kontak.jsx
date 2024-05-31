import React from 'react'
import MainLayout from '../../layouts/MainLayout'
import 'bootstrap'
import { Link } from 'react-router-dom'
import '../../assets/css/pages/Home.css'

const Kontak = () => {
    return (
        <MainLayout>
            <section className="c7Nt m-3">
                <div className="c7Nt7l">
                    <h2>Kontak</h2>
                    <span>Kontak / <Link to={'/4dm1n/Kontak'}><i className="bi bi-telephone"></i></Link></span>
                </div>

                <div className="p-3 card z-0">
                    <div className="row">
                        <div className="col-5">
                            <div className="input-group z-1 mb-2">
                                <label className='me-3 fs-5'>Email</label>
                                <input type="email" className='form-control bg-white' value='samlekom@mamang.com' readOnly />
                            </div>
                            <div className="input-group z-1 mb-2">
                                <label className='me-3 fs-5'>WhatsApp</label>
                                <input type="number" className='form-control bg-white' value='6283896059029' readOnly />
                            </div>
                        </div>
                        <div className="col-1 text-center">
                            <i className="bi bi-arrow-left-right fs-5"></i>
                        </div>
                        <div className="col-6">
                            <div className="input-group z-1 mb-2">
                                <span class="input-group-text">@</span>
                                <input type="number" className='form-control bg-white' />
                                <button className='btn btn-primary ms-3 me-5'>Update</button>
                            </div>
                            <div className="input-group z-1 mb-2">
                                <span class="input-group-text " >+62</span>
                                <input type="number" className='form-control bg-white' />
                                <button className='btn btn-primary ms-3 me-5'>Update</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </MainLayout>
    )
}

export default Kontak
