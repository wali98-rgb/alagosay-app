import Product from "../models/Product.js"

export const create = (req, res) => {
    const newProduct = new Product({
        photo: req.body.photo,
        flavor: req.body.flavor,
        description: req.body.description,
        price: req.body.price
    })

    Product.create(newProduct, (err, data) => {
        if (err) {
            res.status(500).send({msg: "Exist some error"})
            return
        }
        res.send(data)
    })
}

export const findAll = (req, res) => {
    Product.getAll((err, data) => {
        if (err) {
            res.status(500).send({msg: "Exist some error"})
            return
        }
        res.send(data)
    })
}

export const findOne = (req, res) => {
    Product.findById(req.params.id, (err, data) => {
        if(err) {
            if (err.type === 'not_found') {
                res.status(404).send({
                    message: `Not Found product with id : ${req.params.id}`
                })
            } else {
                res.status(500).send({msg: "Exist some error"})
            }
        } else {
            res.send(data)
        }
    })
}

export const update = (req, res) => {
    const productData = new Product(req.body)
    Product.update(req.params.id, productData, (err, data) => {
        if (err) {
            if (err.type === 'not_found') {
                res.status(404).send({
                    message: `Not Found product with id : ${req.params.id}`
                })
            } else {
                res.status(500).send({msg: "Exist some error"})
            }
        } else {
            res.send(data)
        }
    })
}

export const destroy = (req, res) => {
    Product.delete(req.params.id, (err, data) => {
        if (err) {
            if (err.type === 'not_found') {
                res.status(404).send({
                    message: `Not Found product with id : ${req.params.id}`
                })
            } else {
                res.status(500).send({msg: "Exist some error"})
            }
        } else {
            res.send({msg: "Success delete product"})
        }
    })
}