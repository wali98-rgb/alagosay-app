import React, { useEffect, useState } from 'react'
import UpdateModal from '../../components/UpdateModal'
import MainLayout from '../../layouts/MainLayout'
import 'bootstrap'
import '../../assets/css/pages/Home.css'
import { Link, useNavigate, useParams } from 'react-router-dom'
import DraggableModal from '../../components/DraggableModal';
import AddModal from '../../components/AddModal'
import axios from 'axios'
import UpdateCarousel from './carousel/UpdateCarousel'
// import imgCarousel from '../../../../backend-alagosay-app/public/images/Carousel/'

const Konten = () => {
    const [tagContent, setTagContent] = useState("")
    const [titleContent, setTitleContent] = useState("")
    const [subtitleContent, setSubtitleContent] = useState("")
    const [file, setFile] = useState("")
    const [preview, setPreview] = useState("")
    const [carousel, setCarousel] = useState([])
    const [testimony, setTestimony] = useState([])

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const navigate = useNavigate()

    useEffect(() => {
        getCarousels()
        getTestimonies()
    }, [])

    const getCarousels = async () => {
        const response = await axios.get("http://localhost:3001/content")
        setCarousel(response.data)
    }

    const getTestimonies = async () => {
        const response = await axios.get("http://localhost:3001/testimony")
        setTestimony(response.data)
    }

    const loadImageCarousel = (e) => {
        const image = e.target.files[0]
        setFile(image)
        setPreview(URL.createObjectURL(image))
    }

    const createCarousel = async (e) => {
        e.preventDefault()
        const formData = new FormData()

        formData.append("img_content", file)
        formData.append("tag_content", tagContent)
        formData.append("title_content", titleContent)
        formData.append("subtitle_content", subtitleContent)

        try {
            await axios.post("http://localhost:3001/content", formData, {
                headers: {
                    "Content-type": "multipart/form-data",
                },
            })

            navigate("/4dm1n/konten")
            closeModal()
        } catch (error) {
            console.log(error)
        }
    }

    const updateCarousel = async (e, carouselId) => {
        e.preventDefault()
        const formData = new FormData()

        formData.append("img_content", file)
        formData.append("tag_content", tagContent)
        formData.append("title_content", titleContent)
        formData.append("subtitle_content", subtitleContent)

        try {
            await axios.put(`http://localhost:3001/content/${carouselId}`, formData, {
                headers: {
                    "Content-type": "multipart/form-data",
                },
            })

            navigate("/4dm1n/konten")
        } catch (error) {
            console.log(error)
        }
    }

    const deleteCarousel = async (carouselId) => {
        try {
            await axios.delete(`http://localhost:3001/content/${carouselId}`)
            getCarousels()
        } catch (error) {
            console.log(error);
        }
    }

    const deleteTestimony = async (testimonyId) => {
        try {
            await axios.delete(`http://localhost:3001/testimony/${testimonyId}`)
            getTestimonies()
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <MainLayout>
            <section className="c7Nt m-3">
                <div className="c7Nt7l">
                    <h2>Konten</h2>
                    <span><DraggableModal /> / <Link to={'/4dm1n/Konten'}><i className="bi bi-newspaper"></i></Link></span>
                </div>

                <div className="p-3 card z-0">
                    <h3 className='d-flex justify-content-between'>Carousel
                        <span>
                            <AddModal>
                                <form onSubmit={createCarousel}>
                                    <div className="mb-3">
                                        <label htmlHtmlhtmlFor="InputTag" className="form-label">Tag :</label>
                                        <input type="text" className="form-control" id="InputTag" value={tagContent} onChange={(e) => setTagContent(e.target.value)} placeholder="Masukkan tag carousel..." />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlHtmlhtmlFor="InputTitle" className="form-label">Title :</label>
                                        <input type="text" className="form-control" id="InputTitle" value={titleContent} onChange={(e) => setTitleContent(e.target.value)} placeholder="Masukkan title carousel..." />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlHtmlhtmlFor="InputSubtitle" className="form-label">Subtitle :</label>
                                        <input type="text" className="form-control" id="InputSubtitle" value={subtitleContent} onChange={(e) => setSubtitleContent(e.target.value)} placeholder="Masukkan subtitle carousel..." />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlHtmlhtmlFor="formFile" className="form-label">Foto Carousel :</label>
                                        <input className="form-control" type="file" id="formFile" onChange={loadImageCarousel} />
                                        <div id="emailHelp" className="form-text">Pilih file foto...</div>
                                    </div>
                                    {preview ? (
                                        <figure>
                                            <img width={'50%'} className="rounded mx-auto d-block" src={preview} alt="Preview Foto" />
                                        </figure>
                                    ) : (
                                        ""
                                    )}
                                    <button type='submit' className="btn btn-primary">Simpan</button>
                                </form>
                            </AddModal>
                        </span>
                    </h3>

                    <table className='table table-bordered'>
                        <tr className='bg-success text-light'>
                            <td style={{ padding: '.5rem' }} width={'40rem'} align='center'>NO</td>
                            <td align='center'>Tag</td>
                            <td width={'200px'} align='center'>Title</td>
                            <td align='center'>Subtitle</td>
                            <td align='center'>Gambar</td>
                            <td align='center'>Aksi</td>
                        </tr>
                        {
                            carousel.map((carousel, index) => (
                                <tr key={carousel.id}>
                                    <td align='center'>{index + 1}</td>
                                    <td>{carousel.tag_content}</td>
                                    <td>{carousel.title_content}</td>
                                    <td>{carousel.subtitle_content}</td>
                                    <td>
                                        <img
                                            style={{
                                                width: '100%',
                                                height: '5rem',
                                                objectFit: 'contain'
                                            }}
                                            src={carousel.url}
                                            alt={carousel.title_content}
                                        />
                                    </td>
                                    <td>
                                        <span className='btn-group'>
                                            <button onClick={openModal} className='btn btn-primary'>
                                                <button
                                                    onClick={() => updateCarousel(carousel.id)}
                                                    style={{
                                                        border: 'none',
                                                        backgroundColor: 'var(--primary)',
                                                        color: 'white'
                                                    }}
                                                >
                                                    Update
                                                </button>
                                            </button>
                                            <UpdateModal
                                                modalIsOpen={modalIsOpen}
                                                openModal={openModal}
                                                closeModal={closeModal}
                                            >
                                                <form onSubmit={updateCarousel(carousel.id)}>
                                                    <div className="mb-3">
                                                        <label htmlFor="tag" className="form-label">Tag :</label>
                                                        <input type="text" className="form-control" value={carousel.tag_content} id="tag" />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlFor="title" className="form-label">Title :</label>
                                                        <input type="text" className="form-control" value={carousel.title_content} id="title" />
                                                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlFor="subtitle" className="form-label">Subtitle :</label>
                                                        <input type="text" className="form-control" value={carousel.subtitle_content} id="subtitle" />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlFor="gambar" className="form-label">Foto Carousel :</label>
                                                        <input type="file" className="form-control" id="gambar" onChange={loadImageCarousel} required />
                                                    </div>
                                                    {preview ? (
                                                        <figure>
                                                            <img width={'50%'} className="rounded mx-auto d-block" src={preview} alt="Preview Foto" />
                                                        </figure>
                                                    ) : (
                                                        ""
                                                    )}
                                                    {/* <div className="mb-3 form-check">
                                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                                        <label className="form-check-label" htmlFor="exampleCheck1">Apakah anda Yakin</label>
                                                    </div> */}
                                                    <button type="submit" className="btn btn-primary">Update</button>
                                                </form>
                                            </UpdateModal>
                                            <button onClick={() => deleteCarousel(carousel.id)} className='btn btn-danger'>Delete</button>
                                        </span>
                                    </td>
                                </tr>
                            ))
                        }
                    </table>

                    <h3 className='mt-5 mb-3'>Facts</h3>
                    <div className="row">
                        <div className="col-5">
                            <div className="input-group z-1 mb-2">
                                <label className='me-3 fs-5'>Hadir Sejak</label>
                                <input type="number" className='form-control bg-white' value={10} readOnly />
                                <span className="input-group-text" >Tahun</span>
                            </div>
                            <div className="input-group z-1 mb-2">
                                <label className='me-3 fs-5'>Dinikmati Oleh</label>
                                <input type="number" className='form-control bg-white' value={17500} readOnly />
                                <span className="input-group-text" >Orang</span>
                            </div>
                            <div className="input-group z-1 mb-2">
                                <label className='me-3 fs-5'>Jumlah Penjualan</label>
                                <input type="number" className='form-control bg-white' value={9357} readOnly />
                                <span className="input-group-text" >produk</span>
                            </div>
                        </div>
                        <div className="col-1 text-center">
                            <i className="bi bi-arrow-left-right fs-5"></i>
                        </div>
                        <div className="col-6">
                            <div className="input-group z-1 mb-2">
                                <input type="number" className='form-control bg-white' value={10} />
                                <span className="input-group-text" >Tahun</span>
                                <button className='btn btn-primary ms-3 me-5'>Update</button>
                            </div>
                            <div className="input-group z-1 mb-2">
                                <input type="number" className='form-control bg-white' value={17500} />
                                <span className="input-group-text" >Orang</span>
                                <button className='btn btn-primary ms-3 me-5'>Update</button>
                            </div>
                            <div className="input-group z-1 mb-2">
                                <input type="number" className='form-control bg-white' value={9357} />
                                <span className="input-group-text" >produk</span>
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
                                <label htmlFor="floatingTextarea2">Title</label>
                                <button className='btn btn-primary ms-3 me-5'>Update</button>
                            </div>
                            <div className="form-floating input-group z-1 mb-2">
                                <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: '150px' }}></textarea>
                                <label htmlFor="floatingTextarea2">Subtitle</label>
                                <button className='btn btn-primary ms-3 me-5'>Update</button>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="gambar" className="form-label">gambar</label>
                                <input type="file" className="form-control mb-2 me-5" id="gambar1" />
                                <input type="file" className="form-control me-5" id="gambar2" />
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
                                <label htmlFor="floatingTextarea2">Title</label>
                                <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: '50px' }}></textarea>
                                <button className='btn btn-primary ms-3 me-5'>Update</button>
                            </div>
                        </div>
                    </div>


                    <h3 className='d-flex justify-content-between mt-5'>Testimoni
                        <span>
                            <Link to={'/4dm1n/konten/testimony/add'} className='btn btn-success'>Tambah Testimoni</Link>
                        </span>
                    </h3>

                    <table className='table table-bordered '>
                        <tr className='bg-success text-light'>
                            <td style={{ padding: '.5rem' }} width={'40px'} align='center'>NO</td>
                            <td width={'150px'} align='center'>Nama Testimoni</td>
                            <td align='center'>Testimoni</td>
                            <td align='center'>Gambar</td>
                            <td align='center'>Aksi</td>
                        </tr>
                        {
                            testimony.map((item, index) => (
                                <tr>
                                    <td align='center'>{index + 1}</td>
                                    <td>{item.name_testimony}</td>
                                    <td>{item.testimony}.</td>
                                    <td className='d-flex justify-content-center align-items-center'>
                                        <div style={{ width: '10rem', height: '10rem' }} className='d-flex justify-content-center align-items-center'>
                                            <img src={item.url} alt={item.name_testimony} className='rounded' style={{ borderRadius: '.3rem', objectFit: 'contain' }} width={'100%'} height={'100%'} />
                                        </div>
                                    </td>
                                    <td>
                                        <span className='btn-group'>
                                            <a onClick={() => deleteTestimony(item.id)} className="col-3 mx-1 btn btn-danger">Delete</a>
                                        </span>
                                    </td>
                                </tr>
                            ))
                        }
                    </table>

                </div>
            </section>
        </MainLayout >
    )
}

export default Konten
