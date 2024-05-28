import React from 'react'
import UpdateModal from '../../components/UpdateModal'
import MainLayout from '../../layouts/MainLayout'
import 'bootstrap'
import '../../assets/css/pages/Home.css'
import { Link } from 'react-router-dom'
import DraggableModal from '../../components/DraggableModal';

const Konten = () => {
    return (
        <MainLayout>
            <section className="c7Nt m-3">
                <div className="c7Nt7l">
                    <h2>Konten</h2>
                    <span>Konten / <Link to={'/4dm1n/Konten'}><i class="bi bi-newspaper"></i></Link></span>
                </div>


                <div className="p-3 card">
                    <h3 className='d-flex justify-content-between'>Carousel
                        <span>
                            <button className='btn btn-success'>tambah</button>
                            <DraggableModal />
                        </span>
                    </h3>

                    <table className='table table-bordered'>
                        <tr className='bg-success text-light'>
                            <td>NO</td>
                            <td>tag</td>
                            <td>Title</td>
                            <td>subtitle</td>
                            <td>Gambar</td>
                            <td>Menu</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>// Moring Kekinian</td>
                            <td>Buat Santaimu Lebih Asik</td>
                            <td>Moring ini hadir sebagai cemilan yang menemanimu dikala lagi santai</td>
                            <td>carousel-1.jpg</td>
                            <td>
                                <span className='btn-group'>
                                    <UpdateModal>
                                        <input type="text" />
                                        <input type="text" />
                                        <input type="text" />
                                        <input type="text" />
                                    </UpdateModal>
                                    <button className='btn btn-danger'>Delete</button>
                                </span>
                            </td>
                        </tr>
                    </table>

                </div>
            </section>
        </MainLayout>
    )
}

export default Konten
