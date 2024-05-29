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
                    <span><DraggableModal /> / <Link to={'/4dm1n/Konten'}><i className="bi bi-newspaper"></i></Link></span>
                </div>

                <div className="p-3 card z-0">
                    <h3 className='mb-3'>Kontak</h3>
                    <div className="row">
                        <div className="col-5">
                            <div className="input-group z-1 mb-2">
                                <label className='me-3 fs-5'>Email</label>
                                <input type="email" className='form-control bg-white' value={'samlekom@mamang.com'} readOnly />
                            </div>
                            <div className="input-group z-1 mb-2">
                                <label className='me-3 fs-5'>WhatsApp</label>
                                <input type="number" className='form-control bg-white' value={'6283896059029'} readOnly />
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
                    <h3 className='d-flex justify-content-between mt-5'>Carousel
                        <span>
                            <button className='btn btn-success'>tambah</button>
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
                                        <form>
                                            <div class="mb-3">
                                                <label for="tag" class="form-label">Tag</label>
                                                <input type="text" class="form-control" id="tag" />
                                            </div>
                                            <div class="mb-3">
                                                <label for="title" class="form-label">title</label>
                                                <input type="text" class="form-control" id="title" />
                                                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                                            </div>
                                            <div class="mb-3">
                                                <label for="subtitle" class="form-label">subtitle</label>
                                                <input type="text" class="form-control" id="subtitle" />
                                            </div>
                                            <div class="mb-3">
                                                <label for="gambar" class="form-label">gambar</label>
                                                <input type="file" class="form-control" id="gambar" />
                                            </div>
                                            <div class="mb-3 form-check">
                                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                                <label class="form-check-label" for="exampleCheck1">Apakah anda Yakin</label>
                                            </div>
                                            <button type="submit" class="btn btn-primary">Submit</button>
                                        </form>
                                    </UpdateModal>
                                    <button className='btn btn-danger'>Delete</button>
                                </span>
                            </td>
                        </tr>
                    </table>

                    <h3 className='mt-5 mb-3'>Facts</h3>
                    <div className="row">
                        <div className="col-5">
                            <div className="input-group z-1 mb-2">
                                <label className='me-3 fs-5'>Hadir Sejak</label>
                                <input type="number" className='form-control bg-white' value={10} readOnly />
                                <span class="input-group-text" >Tahun</span>
                            </div>
                            <div className="input-group z-1 mb-2">
                                <label className='me-3 fs-5'>Dinikmati Oleh</label>
                                <input type="number" className='form-control bg-white' value={17500} readOnly />
                                <span class="input-group-text" >Orang</span>
                            </div>
                            <div className="input-group z-1 mb-2">
                                <label className='me-3 fs-5'>Jumlah Penjualan</label>
                                <input type="number" className='form-control bg-white' value={9357} readOnly />
                                <span class="input-group-text" >produk</span>
                            </div>
                        </div>
                        <div className="col-1 text-center">
                            <i className="bi bi-arrow-left-right fs-5"></i>
                        </div>
                        <div className="col-6">
                            <div className="input-group z-1 mb-2">
                                <input type="number" className='form-control bg-white' value={10} />
                                <span class="input-group-text" >Tahun</span>
                                <button className='btn btn-primary ms-3 me-5'>Update</button>
                            </div>
                            <div className="input-group z-1 mb-2">
                                <input type="number" className='form-control bg-white' value={17500} />
                                <span class="input-group-text" >Orang</span>
                                <button className='btn btn-primary ms-3 me-5'>Update</button>
                            </div>
                            <div className="input-group z-1 mb-2">
                                <input type="number" className='form-control bg-white' value={9357} />
                                <span class="input-group-text" >produk</span>
                                <button className='btn btn-primary ms-3 me-5'>Update</button>
                            </div>
                        </div>
                    </div>

                    <h3 className='mt-5 mb-3'>About</h3>
                    <div className="row">
                        <div className="col-5">
                            <h4 className="b-4">Alagosay hadir untuk memanjakan lidah Anda
                                setiap saat.</h4>
                            <p>Alagosay, camilan yang membuat Anda ketagihan! Nikmati kelezatan renyah, gurih, dan pedas
                                yang menggoda dari Alagosay.
                                Cocok untuk dinikmati kapan saja, di mana saja, oleh remaja, wanita, dan ibu rumah tangga
                                yang menghargai cita rasa yang
                                istimewa. Segera coba dan rasakan kepuasan tak terlupakan!
                            </p>

                            <div className="row g-2 mb-4">
                                <div className="col-sm-6">
                                    <i className="fa fa-check text-primary me-2"></i>Kualitas Terjamin
                                </div>
                                <div className="col-sm-6">
                                    <i className="fa fa-check text-primary me-2"></i>Telah Terverifikasi
                                </div>
                                <div className="col-sm-6">
                                    <i className="fa fa-check text-primary me-2"></i>Banyak Varian
                                </div>
                                <div className="col-sm-6">
                                    <i className="fa fa-check text-primary me-2"></i>Harga Terjangkau
                                </div>
                            </div>
                        </div>
                        <div className="col-1 text-center">
                            <i className="bi bi-arrow-left-right fs-5"></i>
                        </div>
                        <div className="col-6">
                            <div className="form-floating input-group z-1 mb-2">
                                <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: '50px' }}></textarea>
                                <label for="floatingTextarea2">Title</label>
                                <button className='btn btn-primary ms-3 me-5'>Update</button>
                            </div>
                            <div className="form-floating input-group z-1 mb-2">
                                <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: '150px' }}></textarea>
                                <label for="floatingTextarea2">Subtitle</label>
                                <button className='btn btn-primary ms-3 me-5'>Update</button>
                            </div>
                            <div class="mb-3">
                                <label for="gambar" class="form-label">gambar</label>
                                <input type="file" class="form-control mb-2 me-5" id="gambar1" />
                                <input type="file" class="form-control me-5" id="gambar2" />
                            </div>
                        </div>
                    </div>
                    <h3 className='mt-3'>Produk</h3>
                    <div className="row">
                        <div className="col-5">
                            <h4 className="mb-4">Cobalah sekarang dan nikmati sensasi baru yang menggugah selera Anda</h4>
                        </div>
                        <div className="col-1 text-center">
                            <i className="bi bi-arrow-left-right fs-5"></i>
                        </div>
                        <div className="col-6">
                            <div className="form-floating input-group z-1 mb-2">
                                <label for="floatingTextarea2">Title</label>
                                <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: '50px' }}></textarea>
                                <button className='btn btn-primary ms-3 me-5'>Update</button>
                            </div>
                        </div>
                    </div>


                    <h3 className='d-flex justify-content-between mt-5'>Testimoni
                        <span>
                            <button className='btn btn-success'>tambah</button>
                        </span>
                    </h3>

                    <table className='table table-bordered '>
                        <tr className='bg-success text-light'>
                            <td>NO</td>
                            <td>Testimoni</td>
                            <td>Gambar</td>
                            <td>Menu</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum error dolores unde sapiente minima laborum deserunt tempora, accusantium corporis vero asperiores voluptate distinctio eaque facilis sunt ullam quia pariatur alias.</td>
                            <td>testimonial-1.jpg</td>
                            <td>
                                <span className='btn-group'>
                                    <UpdateModal>
                                        <form>
                                            <div class="mb-3">
                                                <label for="tag" class="form-label">Testimoni</label>
                                                <input type="text" class="form-control" id="tag" />
                                            </div>
                                            <div class="mb-3">
                                                <label for="gambar" class="form-label">gambar</label>
                                                <input type="file" class="form-control" id="gambar" />
                                            </div>
                                            <div class="mb-3 form-check">
                                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                                <label class="form-check-label" for="exampleCheck1">Apakah anda Yakin</label>
                                            </div>
                                            <button type="submit" class="btn btn-primary">Submit</button>
                                        </form>
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
