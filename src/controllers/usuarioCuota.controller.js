const { UsuarioCuota } = require('../models/usuarioCuota.model')

const getUsuarioCuota = async (req, res) => {

    const usuarioCuota = await UsuarioCuota.findAll()
    res.json(usuarioCuota)
}

const createUsuarioCuota = async (req, res) => {
    const { numeroCuota, idUsuario, idCuchubal } = req.body

    const newUsuarioCuota = await UsuarioCuota.create({
        numeroCuota,
        idUsuario,
        idCuchubal
    })
    res.json(newUsuarioCuota)
}

module.exports = { getUsuarioCuota, createUsuarioCuota }