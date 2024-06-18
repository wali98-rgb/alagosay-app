import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import UpdateModal from '../../../components/UpdateModal'

const UpdateCarousel = () => {
    const [tagContent, setTagContent] = useState("")
    const [titleContent, setTitleContent] = useState("")
    const [subtitleContent, setSubtitleContent] = useState("")
    const [file, setFile] = useState("")
    const [preview, setPreview] = useState("")

    const { id } = useParams()

    const navigate = useNavigate()

    useEffect(() => {
        getCarouselById()
    }, [])

    const getCarouselById = async () => {
        const response = await axios.get(`http://localhost:3001/content/${id}`)
        setFile(response.data.img_content)
        setTagContent(response.data.tag_content)
        setTitleContent(response.data.title_content)
        setSubtitleContent(response.data.subtitle_content)
        setPreview(response.data.url)
    }

    const loadImageCarousel = (e) => {
        const image = e.target.files[0]
        setFile(image)
        setPreview(URL.createObjectURL(image))
    }

    const updateCarousel = async (e) => {
        e.preventDefault()
        const formData = new FormData()

        formData.append("img_content", file)
        formData.append("tag_content", tagContent)
        formData.append("title_content", titleContent)
        formData.append("subtitle_content", subtitleContent)

        try {
            await axios.put(`http://localhost:3001/content/${id}`, formData, {
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
        <>
            <UpdateModal>
                <form onSubmit={updateCarousel}>
                    <div className="mb-3">
                        <label htmlFor="tag" className="form-label">Tag :</label>
                        <input type="text" className="form-control" value={tagContent} id="tag" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title :</label>
                        <input type="text" className="form-control" value={titleContent} id="title" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="subtitle" className="form-label">Subtitle :</label>
                        <input type="text" className="form-control" value={subtitleContent} id="subtitle" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="gambar" className="form-label">Foto Carousel :</label>
                        <input type="file" className="form-control" id="gambar" value="" onChange={loadImageCarousel} required />
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
        </>
    )
}

export default UpdateCarousel
