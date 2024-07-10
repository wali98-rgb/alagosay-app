import React, { useState } from 'react'
import MainLayout from '../../../layouts/MainLayout'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const AddTestimony = () => {
    const [nameTestimony, setNameTestimony] = useState("")
    const [testimony, setTestimony] = useState("")
    const [file, setFile] = useState("")
    const [preview, setPreview] = useState("")

    // const photoRef = useRef()
    // const flavorRef = useRef()
    // const priceRef = useRef()
    // const descRef = useRef()

    const navigate = useNavigate()

    const loadImage = (e) => {
        const image = e.target.files[0]
        setFile(image)
        setPreview(URL.createObjectURL(image))
    }

    const createTestimony = async (e) => {
        e.preventDefault()
        const formData = new FormData()

        formData.append("image_testimony", file)
        formData.append("name_testimony", nameTestimony)
        formData.append("testimony", testimony)

        try {
            await axios.post("http://localhost:3001/testimony", formData, {
                headers: {
                    "Content-type": "multipart/form-data",
                },
            })

            navigate("/4dm1n/konten")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <MainLayout>
                <section className="c7Nt">
                    <div className="c7Nt7l">
                        <h2>Testimoni</h2>
                        <span>Testimoni / <Link to={'/4dm1n/product'}><i className="bi bi-newspaper"></i></Link></span>
                    </div>

                    <div className="c7Ntcx">
                        <form onSubmit={createTestimony}>
                            {preview ? (
                                <figure className='d-flex justify-content-center align-items-center'>
                                    <img className="rounded mx-auto" style={{ width: '30%' }} src={preview} alt="Preview Foto" />
                                </figure>
                            ) : (
                                ""
                            )}
                            <div className="mb-3">
                                <label htmlFor="formFile" className="form-label">Foto Pemberi Testimoni :</label>
                                <input className="form-control" type="file" id="formFile" onChange={loadImage} />
                                <div id="emailHelp" className="form-text">Pilih file foto...</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="InputFlavor" className="form-label">Nama :</label>
                                <input type="text" className="form-control" id="InputFlavor" value={nameTestimony} onChange={(e) => setNameTestimony(e.target.value)} placeholder="Masukkan rasa untuk moring..." />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="InputDescription" className="form-label">Testimoni :</label>
                                <textarea className="form-control" id="InputDescription" value={testimony} onChange={(e) => setTestimony(e.target.value)} placeholder="Deskripsi moring..." rows="3"></textarea>
                            </div>
                            <button type='submit' className="btn btn-primary">Simpan</button>
                            <Link to={'/4dm1n/konten'} type='submit' className="btn btn-danger mx-2">Kembali</Link>
                        </form>
                    </div>
                </section>
            </MainLayout>
        </div>
    )
}

export default AddTestimony
