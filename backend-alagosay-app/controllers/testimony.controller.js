import Testimony from "../models/Testimony.js"
import path, { resolve } from "path"
import fs, { stat } from "fs"

export const create = (req, res) => {
    if (req.files === null) return res.status(400).json({ msg: "No File Uploaded" })

    const name_testimony = req.body.name_testimony
    const file = req.files.image_testimony
    const fileSize = file.data.length
    const ext = path.extname(file.name)
    const fileName = file.md5 + ext
    const url = `${req.protocol}://${req.get("host")}/images/Testimony/${fileName}`
    const allowedType = ['.png', '.jpg', '.jpeg', '.jfif']

    if (!allowedType.includes(ext.toLowerCase())) return res.status(422).json({ msg: "Invalid Images" })
    if (fileSize > 5000000) return res.status(422).json({ msg: "Image must be less than 5 MB" })

    file.mv(`./public/images/Testimony/${fileName}`, async (err) => {
        if (err) return res.status(500).json({ msg: err.message })

        const newTestimony = new Testimony({
            image_testimony: fileName,
            url: url,
            name_testimony: name_testimony,
            testimony: req.body.testimony
        })

        try {
            await Testimony.create(newTestimony, (err, data) => {
                if (err) {
                    // res.status(500).send({ msg: "Exist some error" })
                    return
                }
            })

            res.status(200).json({ msg: "Testimony Created Successfuly" })
        } catch (error) {
            console.log(error.message)
        }
    })
}

export const findAll = (req, res) => {
    Testimony.getAll((err, data) => {
        if (err) {
            res.status(500).send({ msg: "Exist some error" })
            return
        }
        res.send(data)
    })
}

export const findOne = (req, res) => {
    Testimony.findById(req.params.id, (err, data) => {
        if (err) {
            if (err.type === 'not_found') {
                res.status(404).send({
                    message: `Not Found testimony with id : ${req.params.id}`
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
    const testimony = await new Promise((resolve, reject) => {
        Testimony.findById(req.params.id, (err, data) => {
            if (err) {
                if (err.type === 'not_found') {
                    return reject({
                        status: 404,
                        message: `Not Found testimony with id : ${req.params.id}`
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

    if (!testimony) return res.status(404).json({ msg: "No Data Found" })

    let fileName = ""
    if (req.files === null) {
        fileName = Testimony.image_testimony
    } else {
        const file = req.files.image_testimony
        const fileSize = file.data.length
        const ext = path.extname(file.name)
        fileName = file.md5 + ext
        const allowedType = ['.png', '.jpg', '.jpeg', '.jfif']

        if (!allowedType.includes(ext.toLowerCase())) return res.status(422).json({ msg: "Invalid Images" })
        if (fileSize > 5000000) return res.status(422).json({ msg: "Image must be less than 5 MB" })

        const filepath = `./public/images/Testimony/${testimony.image_testimony}`
        fs.unlinkSync(filepath)

        file.mv(`./public/images/Testimony/${fileName}`, async (err) => {
            if (err) return res.status(500).json({ msg: err.message })
        })
    }

    const name_testimony = req.body.name_testimony
    const url = `${req.protocol}://${req.get("host")}/images/Testimony/${fileName}`

    const testimonyData = new Testimony({
        image_testimony: fileName,
        url: url,
        name_testimony: name_testimony,
        testimony: req.body.testimony
    })

    try {
        await Testimony.update(req.params.id, testimonyData, (err, data) => {
            if (err) {
                if (err.type === 'not_found') {
                    res.status(404).send({
                        message: `Not Found testimony with id : ${req.params.id}`
                    })
                } else {
                    res.status(500).send({ msg: "Exist some error" })
                }
            } else {
                res.send({ msg: "Success Updated Testimony" })
            }
        })
    } catch (error) {
        console.log(error.message)
    }
}

export const destroy = async (req, res) => {
    const testimony = await new Promise((resolve, reject) => {
        Testimony.findById(req.params.id, (err, data) => {
            if (err) {
                if (err.type === 'not_found') {
                    return reject({
                        status: 404,
                        message: `Not Found testimony with id : ${req.params.id}`
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

    if (!testimony) return res.status(404).json({ msg: "No Data Found" })

    try {
        const filepath = `./public/images/Testimony/${testimony.image_testimony}`
        fs.unlinkSync(filepath)

        await Testimony.delete(req.params.id, (err, data) => {
            if (err) {
                if (err.type === 'not_found') {
                    res.status(404).send({
                        message: `Not Found testimony with id : ${req.params.id}`
                    })
                } else {
                    res.status(500).send({ msg: "Exist some error" })
                }
            } else {
                res.send({ msg: "Success delete testimony" })
            }
        })
    } catch (error) {
        console.log(error.message)
    }
}