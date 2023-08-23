const { Router } = require('express')
const { Usuario } = require('../models/usuario.model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs');

const routerAut = Router()

routerAut.post('/login', async (req, res, next) => {

    const { correo, password } = req.body;

    const user = await Usuario.findOne({
        where: { correo }
    });

    if (!user || !(await bcrypt.compare(password, user.password))) {
        return next("Error con credenciales")
    }

    user.password = undefined;

    const token = jwt.sign({ id: user.id }, "process.env.JWT_SECRET", {
        expiresIn: '30d',
    });

    res.status(200).json({
        status: 'success',
        data: { user, token },
    });

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