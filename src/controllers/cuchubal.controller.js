const { Cuchubal } = require('../models/cuchubal.model')
const { UsuarioCuota } = require('../models/usuarioCuota.model')
const { Usuario } = require('../models/usuario.model')

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
        where: { idCuchubal: id },
        include: [{
            model: Cuchubal
        }, { model: Usuario }]
    })
    res.json(cuchubalCuotas)
}


const getCuchubales = async (req, res) => {
    const { id } = req.params
    const cuchubales = await Cuchubal.findAll({
        where: { idUsuario: id },
        include: [{
            model: Usuario,
        }]
    })

    res.json(cuchubales)
}

const deleteCuchubal = async (req, res) => {
    try {
        const { id } = req.params
        const result = await Cuchubal.destroy({
            where: { id }
        })

        if (result) {
            res.json({ message: 'Cuchubal deleted successfully' })
        } else {
            res.status(404).json({ message: 'Cuchubal not found' })
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = { createCuchubal, getCuchubalCuotas, getCuchubales, deleteCuchubal }