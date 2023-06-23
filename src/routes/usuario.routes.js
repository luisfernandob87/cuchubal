const { Router } = require('express')
const { createUsuario, getUsuarios, updateUsuario, deleteUsuario, getUsuario, getUsuarioCuotas } = require('../controllers/usuarios.controller')

const routerUser = Router()

routerUser.get('/usuarios', getUsuarios)
routerUser.post('/usuario', createUsuario)
routerUser.put('/usuario/:id', updateUsuario)
routerUser.delete('/usuario/:id', deleteUsuario)
routerUser.get('/usuario/:id', getUsuario)

routerUser.get('/usuario/:id/cuotas', getUsuarioCuotas)

module.exports = { routerUser }