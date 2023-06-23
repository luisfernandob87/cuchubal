const { Usuario } = require('../models/usuario.model')

const getUsuarios = async (req, res) => {

    try {
        const usuarios = await Usuario.findAll()
        res.json(usuarios)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

const createUsuario = async (req, res) => {
    try {
        const { nombre, correo, password } = req.body

        const newUser = await Usuario.create({
            nombre,
            correo,
            password
        })

        res.json(newUser)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

const getUsuario = async (req, res) => {
    const { id } = req.params
    try {
        const usuario = await Usuario.findOne({
            where: { id }
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

module.exports = { getUsuarios, createUsuario, getUsuario, updateUsuario, deleteUsuario }