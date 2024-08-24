const { Cuchubal } = require('../models/cuchubal.model')
const { Usuario } = require('../models/usuario.model')
const { UsuarioCuota } = require('../models/usuarioCuota.model')

const getUsuarios = async (req, res) => {

    try {
        const usuarios = await Usuario.findAll({
            // attributes: { exclude: ['password'] }
        })
        res.json(usuarios)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}


const getUsuario = async (req, res) => {
    const { id } = req.params
    try {
        const usuario = await Usuario.findOne({
            where: { id },
            // attributes: { exclude: ['password'] }
        })
        res.json(usuario)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

const getUsuarioCorreo = async (req, res) => {
    const { correo } = req.body
    try {
        const usuario = await Usuario.findOne({
            where: { correo },
            // attributes: { exclude: ['password'] }
        })
        res.json(usuario)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

const updateUsuario = async (req, res) => {
    const { id } = req.params
    const updUsuario = await Usuario.findOne({
        where: { id }
    })
    updUsuario.set(req.body)
    await updUsuario.save()
    return res.json(updUsuario)
}

const deleteUsuario = async (req, res) => {
    const { id } = req.params
    try {
        const result = await Usuario.destroy({
            where: { id }
        })
        console.log(result);
        return res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

const getMisCuotas = async (req, res) => {
    const { id } = req.params
    const usuarioMisCuotas = await UsuarioCuota.findAll({
        where: { idUsuario: id },
        include: [{
            model: Cuchubal,
        }]
    })
    res.json(usuarioMisCuotas)
}



module.exports = { getUsuarios, getUsuario, updateUsuario, deleteUsuario, getMisCuotas, getUsuarioCorreo }