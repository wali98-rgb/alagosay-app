import sql from "./Connection.js"

const Content = function (content) {
    this.tag_content = content.tag_content
    this.title_content = content.title_content
    this.subtitle_content = content.subtitle_content
    this.img_content = content.img_content
    this.url = content.url
}

const tableName = 'contents'

Content.getAll = (result) => {
    sql.query(`SELECT * FROM ${tableName}`, (err, res) => {
        if (err) {
            result(err, null)
            return
        }
        result(null, res)
    })
}

Content.create = (newContent, result) => {
    sql.query(`INSERT INTO ${tableName} SET ?`, newContent, (err, res) => {
        if (err) {
            result(err, null)
            return
        }
        result(null, { id: res.insertId, newContent })
    })
}

Content.findById = (id, result) => {
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

Content.update = (id, data, result) => {
    sql.query(`UPDATE ${tableName} SET tag_content = ?, title_content = ?, subtitle_content = ?, img_content = ?, url = ? WHERE id = ?`,
        [data.tag_content, data.title_content, data.subtitle_content, data.img_content, data.url, id], (err, res) => {
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

Content.delete = (id, result) => {
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

export default Content