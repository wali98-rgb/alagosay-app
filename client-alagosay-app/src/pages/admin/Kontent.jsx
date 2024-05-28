import React from 'react'
import MainLayout from '../../layouts/MainLayout'
import 'bootstrap'
import React, { useState } from 'react';
import DraggableModal from '../../components/DraggableModal';
import '../../assets/css/pages/Home.css'
import { Link } from 'react-router-dom'

const Konten = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };
    return (
        <MainLayout>
            <section className="c7Nt m-3">
                <div className="c7Nt7l">
                    <h2>Konten</h2>
                    <span>Konten / <Link to={'/4dm1n/Konten'}><i class="bi bi-newspaper"></i></Link></span>
                </div>

                <div className="row">
                    <div className="p-3 card col-6">
                        <h3 className='d-flex justify-content-between'>Carousel
                            <span>
                                <button className='btn btn-success'>tambah</button>
                                <button onClick={toggleModal}>
                                    {isModalOpen ? 'Close Modal' : 'Open Modal'} Preview
                                </button>
                                <DraggableModal isOpen={isModalOpen} toggleModal={toggleModal} />

                            </span>
                        </h3>
                        <table className='table table-success table-striped-columns'>
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
                                <td>mamang</td>
                            </tr>
                        </table>
                    </div>
                    <div className="col-6">
                        <iframe src="/" frameborder="0" width={'100%'} height={1000}></iframe>
                    </div>
                </div>
            </section>
        </MainLayout>
    )
}

export default Konten
