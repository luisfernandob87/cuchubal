const { UsuarioCuota } = require('../models/usuarioCuota.model')

const getUsuarioCuota = async (req, res) => {

    const usuarioCuota = await UsuarioCuota.findAll()
    res.json(usuarioCuota)
}


const createUsuarioCuota = async (req, res) => {

    const newUsuarioCuota = await UsuarioCuota.bulkCreate(
        req.body
    )
    res.json(newUsuarioCuota)
}

module.exports = { getUsuarioCuota, createUsuarioCuota }