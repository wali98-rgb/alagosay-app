import sql from "./Connection.js"

const Testimony = function (testimony) {
    this.image_testimony = testimony.image_testimony
    this.url = testimony.url
    this.name_testimony = testimony.name_testimony
    this.testimony = testimony.testimony
}

const tableName = 'testimonies'

Testimony.create = (newTestimony, result) => {
    sql.query(`INSERT INTO ${tableName} SET ?`, newTestimony, (err, res) => {
        if (err) {
            result(err, null)
            return
        }
        result(null, { id: res.insertId, newTestimony })
    })
}

Testimony.getAll = (result) => {
    sql.query(`SELECT * FROM ${tableName}`, (err, res) => {
        if (err) {
            result(err, null)
            return
        }
        result(null, res)
    })
}

Testimony.findById = (id, result) => {
    sql.query(`SELECT * FROM ${tableName} WHERE id = ${id}`, (err, res) => {
        if (err) {
            result(null, res[0])
            return
        }

        // Jika data ditemukan
        if (res.length) {
            result(null, res[0])
            return
        }

        // Jika kosong
        result({ type: 'not_found' }, null)
    })
}

Testimony.update = (id, data, result) => {
    sql.query(`UPDATE ${tableName} SET image_testimony = ?, url = ?, name_testimony = ?, testimony = ? WHERE id = ?`,
        [data.image_testimony, data.url, data.name_testimony, data.testimony, id], (err, res) => {
            if (err) {
                result(err, null)
                return
            }

            if (res.affectedRows == 0) {
                result({ type: 'not_found' }, null)
                return
            }

            result(null, { id: id, data })
        })
}

Testimony.delete = (id, result) => {
    sql.query(`DELETE FROM ${tableName} WHERE id = ?`, id, (err, res) => {
        if (err) {
            result(err, null)
            return
        }

        if (res.affectedRows == 0) {
            result({ type: 'not_found' }, null)
            return
        }

        result(null, res)
    })
}

export default Testimony