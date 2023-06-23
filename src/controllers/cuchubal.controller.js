const { Cuchubal } = require('../models/cuchubal.model')

const getCuchubal = async (req, res) => {
    const cuchubal = await Cuchubal.findAll()
    res.json(cuchubal)
}

const createCuchubal = async (req, res) => {
    const { nombreCuchubal, formaPago, fechaInicio, noParticipantes, cuotaPorParticipante, sorteo } = req.body

    const newCuchubal = await Cuchubal.create({
        nombreCuchubal,
        formaPago,
        fechaInicio,
        noParticipantes,
        cuotaPorParticipante,
        sorteo
    })

    res.json(newCuchubal)
}

module.exports = { getCuchubal, createCuchubal }