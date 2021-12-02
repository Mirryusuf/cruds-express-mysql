const Product = require('./model');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;


const index = async (req, res) => {
    const search = req.query.search;
    var cari = {
        nama: { [Op.like]: `%${search}%` }
    }
    if (cari) {
        try {
            const result = await Product.findAll({ where: cari });
            res.send(result);
        } catch (e) {
            res.send(e);
        }
    } else {
        try {
            const result = await Product.findAll();
            res.send(result);
        } catch (e) {
            res.send(e);
        }
    }
}

const view = async (req, res) => {
    try {
        const result = await Product.findAll({
            where: {
                id: req.params.id
            }
        });
        res.send(result[0]);
    } catch (e) {
        res.send(e);
    }
}

const store = async (req, res) => {
    const { nama,stock, harga, status } = req.body;
    try {
        await Product.sync();
        const result = await Product.create({nama, stock, harga, status});
        res.send(result);  
    } catch (e) {
        res.send(e);
    }
}

const update = async (req, res) => {
    try {
        await Product.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.send({
            message: 'berhasil update'
        });  
    } catch (e) {
        res.send(e);
    }
}

const destroy = async (req, res) => {
    try {
        await Product.destroy({
            where: {
                id: req.params.id
            }
        });
        res.send({
            message: 'berhasil delete'
        });  
    } catch (e) {
        res.send(e);
    }
}


module.exports = {
    index,
    view,
    store,
    update,
    destroy
}