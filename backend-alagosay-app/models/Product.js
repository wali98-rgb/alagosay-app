import sql from "./Connection.js"

const Product = function(siswa) {
    this.photo = siswa.photo
    this.flavor = siswa.flavor
    this.description = siswa.description
    this.price = siswa.price
}

const tableName = 'products'

Product.create = (newProduct, result) => {
    sql.query(`INSERT INTO ${tableName} SET ?`, newProduct, (err, res) => {
        if(err) {
            result(err, null)
            return
        }
        result(null, {id: res.insertId, newProduct})
    })
}

Product.getAll = (result) => {
    sql.query(`SELECT * FROM ${tableName}`, (err, res) => {
        if(err) {
            result(err, null)
            return
        }
        result(null, res)
    })
}

Product.findById = (id, result) => {
    sql.query(`SELECT * FROM ${tableName} WHERE id = ${id}`, (err, res) => {
        if(err) {
            result(null, res[0])
            return
        }

        // Jika data ditemukan
        if(res.length) {
            result(null, res[0])
            return
        }

        // Jika kosong
        result({type: 'not_found'}, null)
    })
}

Product.update = (id, data, result) => {
    sql.query(`UPDATE ${tableName} SET photo = ?, flavor = ?, description = ?, price = ? WHERE id = ?`,
        [data.photo, data.flavor, data.description, data.price, id], (err, res) => {
            if(err) {
                result(err, null)
                return
            }

            if (res.affectedRows == 0) {
                result({type: 'not_found'}, null)
                return
            }

            result(null, {id: id, data})
        })
}

Product.delete = (id, result) => {
    sql.query(`DELETE FROM ${tableName} WHERE id = ?`, id, (err, res) => {
        if(err) {
            result(err, null)
            return
        }

        if (res.affectedRows == 0) {
            result({type: 'not_found'}, null)
            return
        }

        result (null, res)
    })
}

export default Product