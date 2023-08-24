const { Cuchubal } = require('../models/cuchubal.model')
const { UsuarioCuota } = require('../models/usuarioCuota.model')

const getCuchubal = async (req, res) => {
    const cuchubal = await Cuchubal.findAll()
    res.json(cuchubal)
}

const createCuchubal = async (req, res) => {
    const { nombreCuchubal, formaPago, fechaInicio, noParticipantes, cuotaPorParticipante, sorteo, idUsuario } = req.body

    const newCuchubal = await Cuchubal.create({
        nombreCuchubal,
        formaPago,
        fechaInicio,
        noParticipantes,
        cuotaPorParticipante,
        sorteo,
        idUsuario
    })

    res.json(newCuchubal)
}

const getCuchubalCuotas = async (req, res) => {
    const { id } = req.params
    const cuchubalCuotas = await UsuarioCuota.findAll({
        where: { idCuchubal: id }
    })
    res.json(cuchubalCuotas)
}

module.exports = { getCuchubal, createCuchubal, getCuchubalCuotas }