const connection = require('../../config/mysql');
const fs = require('fs');
const path = require('path');

const index = (req, res) => {
    const {search} = req.query;
    let exec;
    if(search){
        exec = {
            sql: 'SELECT * FROM products WHERE nama LIKE ?',
            values: [`%${search}%`]
        }
    } else {
        exec = {
            sql: 'SELECT * FROM products'
        }
    }
    connection.query(exec, _response(res))
}

const view = (req, res) => {
    connection.query({
        sql: 'SELECT * FROM products WHERE id = ?',
        values: [req.params.id]
    }, _response(res))
}

const store = (req, res) => {
    const { nama, stock, harga, status } = req.body;
    connection.query({
        sql: 'INSERT INTO products (nama, stock, harga, status) VALUES (?, ?, ?, ?)',
        values: [nama, stock, harga, status]
    }, _response(res))
}

const update = (req, res) => {
    const { nama, stock, harga, status, id } = req.body;
    connection.query({
        sql: 'UPDATE products SET nama = ?, stock = ?, harga = ?, status = ? WHERE id = ?',
        values: [nama, stock, harga, status, id]
    }, _response(res))
}

const destroy = (req, res) => {
    connection.query({
        sql: 'DELETE FROM products WHERE id = ?',
        values: [req.params.id]
    }, _response(res))
}
// const search = (req, res) => {
//     connection.query({
//         sql: 'SELECT * FROM products WHERE nama LIKE ',
//         values: [req.params.id]
//     }, _response(res))
// }
// const store = (req, res) => {
//     const { user_id, nama, stock, harga, status } = req.body;
//     const image = req.file;
//     if(image){
//         const target = path.join(__dirname, '../../uploads', image.originalname);
//         fs.renameSync(image.path, target)
//         connection.query({
//             sql: 'INSERT INTO product (user_id, nama, stock, harga, status, image_url) VALUES (?, ?, ?, ?, ?, ?)',
//             values: [parseInt(user_id), nama, stock, harga, status, `http://127.0.0.1:5000/public/${image.originalname}`]
//         }, _response(res))
//     }
// }

const _response = (res) => {
    return (error, result) => {
        if(error){
            res.send({
                status: "failed",
                response: error
            })
        } else {
            res.send({
                status: "success",
                response: result
            })
        }
    }
}

module.exports = {
    index,
    view,
    store,
    update,
    destroy
}