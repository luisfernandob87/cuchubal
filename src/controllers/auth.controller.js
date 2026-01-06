const { Router } = require('express');
const authService = require('../services/auth.service');

const routerAut = Router();

routerAut.post('/login', async (req, res) => {
    try {
        const { correo, password } = req.body;
        const result = await authService.login(correo, password);

        res.status(200).json({
            status: 'success',
            data: result,
        });
    } catch (error) {
        res.status(401).json({ status: 'error', message: error.message });
    }
});

routerAut.post('/signup', async (req, res) => {
    try {
        const { nombre, correo, password } = req.body;
        const newUser = await authService.signup(nombre, correo, password);

        res.status(201).json({
            status: 'success',
            data: newUser,
        });
    } catch (error) {
        res.status(400).json({ status: 'error', message: error.message });
    }
});

routerAut.get('/profile', (req, res) => {
    res.json({ message: 'User profile endpoint' });
});

module.exports = { routerAut };
