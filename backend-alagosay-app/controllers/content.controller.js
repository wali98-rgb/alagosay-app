import Content from "../models/Content.js"
import path, { resolve } from "path"
import fs, { stat } from "fs"

export const create = (req, res) => {
    if (req.files === null) return res.status(400).json({ msg: "No File Uploaded" })

    const tag_content = req.body.tag_content
    const file = req.files.img_content
    const fileSize = file.data.length
    const ext = path.extname(file.name)
    const fileName = file.md5 + ext
    const url = `${req.protocol}://${req.get("host")}/images/Carousel/${fileName}`
    const allowedType = ['.png', '.jpg', '.jpeg', '.jfif']

    if (!allowedType.includes(ext.toLowerCase())) return res.status(422).json({ msg: "Invalid Images" })
    if (fileSize > 5000000) return res.status(422).json({ msg: "Image must be less than 5 MB" })

    file.mv(`./public/images/Carousel/${fileName}`, async (err) => {
        if (err) return res.status(500).json({ msg: err.message })

        const newContent = new Content({
            tag_content: tag_content,
            title_content: req.body.title_content,
            subtitle_content: req.body.subtitle_content,
            img_content: fileName,
            url: url
        })

        try {
            await Content.create(newContent, (err, data) => {
                if (err) {
                    // res.status(500).send({ msg: "Exist some error" })
                    return
                }
            })

            res.status(200).json({ msg: "Content Created Successfuly" })
        } catch (error) {
            console.log(error.message)
        }
    })
}

export const findAll = (req, res) => {
    Content.getAll((err, data) => {
        if (err) {
            res.status(500).send({ msg: "Exist some error" })
            return
        }
        res.send(data)
    })
}

export const findOne = (req, res) => {
    Content.findById(req.params.id, (err, data) => {
        if (err) {
            if (err.type === 'not_found') {
                res.status(404).send({
                    message: `Not Found content with id : ${req.params.id}`
                })
            } else {
                res.status(500).send({ msg: "Exist some error" })
            }
        } else {
            res.send(data)
        }
    })
}

export const update = async (req, res) => {
    const content = await new Promise((resolve, reject) => {
        Content.findById(req.params.id, (err, data) => {
            if (err) {
                if (err.type === 'not_found') {
                    return reject({
                        status: 404,
                        message: `Not Found content with id : ${req.params.id}`
                    })
                } else {
                    return reject({
                        status: 500,
                        message: "Exist some error",
                        error: err
                    })
                }
            }

            resolve(data)
        })
    })

    if (!content) return res.status(404).json({ msg: "No Data Found" })

    let fileName = ""
    if (req.files === null) {
        fileName = Content.img_content
    } else {
        const file = req.files.img_content
        const fileSize = file.data.length
        const ext = path.extname(file.name)
        fileName = file.md5 + ext
        const allowedType = ['.png', '.jpg', '.jpeg', '.jfif']

        if (!allowedType.includes(ext.toLowerCase())) return res.status(422).json({ msg: "Invalid Images" })
        if (fileSize > 5000000) return res.status(422).json({ msg: "Image must be less than 5 MB" })

        const filepath = `./public/images/Carousel/${content.img_content}`
        fs.unlinkSync(filepath)

        file.mv(`./public/images/Carousel/${fileName}`, async (err) => {
            if (err) return res.status(500).json({ msg: err.message })
        })
    }

    const tag_content = req.body.tag_content
    const url = `${req.protocol}://${req.get("host")}/images/${fileName}`

    const contentData = new Content({
        tag_content: tag_content,
        title_content: req.body.title_content,
        subtitle_content: req.body.subtitle_content,
        img_content: fileName,
        url: url
    })

    try {
        await Content.update(req.params.id, contentData, (err, data) => {
            if (err) {
                if (err.type === 'not_found') {
                    res.status(404).send({
                        message: `Not Found content with id : ${req.params.id}`
                    })
                } else {
                    res.status(500).send({ msg: "Exist some error" })
                }
            } else {
                res.send({ msg: "Success Updated Content" })
            }
        })
    } catch (error) {
        console.log(error.message)
    }
}

export const destroy = async (req, res) => {
    const content = await new Promise((resolve, reject) => {
        Content.findById(req.params.id, (err, data) => {
            if (err) {
                if (err.type === 'not_found') {
                    return reject({
                        status: 404,
                        message: `Not Found content with id : ${req.params.id}`
                    })
                } else {
                    return reject({
                        status: 500,
                        message: "Exist some error",
                        error: err
                    })
                }
            }

            resolve(data)
        })
    })

    if (!content) return res.status(404).json({ msg: "No Data Found" })

    try {
        const filepath = `./public/images/Carousel/${content.img_content}`
        fs.unlinkSync(filepath)

        await Content.delete(req.params.id, (err, data) => {
            if (err) {
                if (err.type === 'not_found') {
                    res.status(404).send({
                        message: `Not Found content with id : ${req.params.id}`
                    })
                } else {
                    res.status(500).send({ msg: "Exist some error" })
                }
            } else {
                res.send({ msg: "Success delete content" })
            }
        })
    } catch (error) {
        console.log(error.message)
    }
}