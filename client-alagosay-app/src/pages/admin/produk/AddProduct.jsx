import React, { useRef, useState } from 'react'
import MainLayout from '../../../layouts/MainLayout'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const AddProduct = () => {
    const [flavor, setFlavor] = useState("")
    const [desc, setDesc] = useState("")
    const [price, setPrice] = useState("")
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

    const createProduct = async (e) => {
        e.preventDefault()
        const formData = new FormData()

        formData.append("photo", file)
        formData.append("flavor", flavor)
        formData.append("description", desc)
        formData.append("price", price)

        try {
            await axios.post("http://localhost:3001/product", formData, {
                headers: {
                    "Content-type": "multipart/form-data",
                },
            })

            navigate("/4dm1n/product")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <MainLayout>
                <section className="c7Nt">
                    <div className="c7Nt7l">
                        <h2>Produk</h2>
                        <span>Produk / <Link to={'/4dm1n/product'}><i className="bi bi-journal-richtext"></i></Link></span>
                    </div>

                    <div className="c7Ntcx">
                        <form onSubmit={createProduct}>
                            {preview ? (
                                <figure>
                                    <img className="rounded mx-auto d-block" src={preview} alt="Preview Foto" />
                                </figure>
                            ) : (
                                ""
                            )}
                            <div className="mb-3">
                                <label htmlFor="formFile" className="form-label">Foto Moring :</label>
                                <input className="form-control" type="file" id="formFile" onChange={loadImage} />
                                <div id="emailHelp" className="form-text">Pilih file foto...</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="InputFlavor" className="form-label">Rasa Moring :</label>
                                <input type="text" className="form-control" id="InputFlavor" value={flavor} onChange={(e) => setFlavor(e.target.value)} placeholder="Masukkan rasa untuk moring..." />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="InputFlavor" className="form-label">Harga Moring :</label>
                                <input type="text" className="form-control" id="InputFlavor" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Harga moring..." />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="InputDescription" className="form-label">Deskripsikan Moring :</label>
                                <textarea className="form-control" id="InputDescription" value={desc} onChange={(e) => setDesc(e.target.value)} placeholder="Deskripsi moring..." rows="3"></textarea>
                            </div>
                            <button type='submit' className="btn btn-primary">Simpan</button>
                        </form>
                    </div>
                </section>
            </MainLayout>
        </div>
    )
}

export default AddProduct
