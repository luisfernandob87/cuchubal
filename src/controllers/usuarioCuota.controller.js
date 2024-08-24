const { UsuarioCuota } = require('../models/usuarioCuota.model')

const getUsuarioCuota = async (req, res) => {

    const usuarioCuota = await UsuarioCuota.findAll()
    res.json(usuarioCuota)
}

const createUsuarioCuota = async (req, res) => {
    const { numeroCuota, idCuchubal, idUsuario } = req.body
    const newUsuarioCuota = await UsuarioCuota.create({
        numeroCuota,
        idCuchubal,
        idUsuario
    })
    res.json(newUsuarioCuota)
}



module.exports = { getUsuarioCuota, createUsuarioCuota }