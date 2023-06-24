const { Router } = require('express')
const { Usuario } = require('../models/usuario.model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs');

const routerAut = Router()

routerAut.post('/login', (req, res, next) => {
    res.json('login')
})

routerAut.post('/signup', async (req, res, next) => {
    try {
        const { nombre, correo, password } = req.body

        const salt = await bcrypt.genSalt(12);
        const hashedPassword = await bcrypt.hash(password, salt);


        const newUser = await Usuario.create({
            nombre,
            correo,
            password: hashedPassword
        })

        res.json(newUser)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }

})

routerAut.get('/profile', (req, res, next) => {
    res.json('login')

})


module.exports = { routerAut }