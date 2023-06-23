const { Router } = require('express')
const { createUsuario, getUsuarios, updateUsuario, deleteUsuario, getUsuario } = require('../controllers/usuarios.controller')

const routerUser = Router()

routerUser.get('/usuarios', getUsuarios)
routerUser.post('/usuarios', createUsuario)
routerUser.put('/usuarios/:id', updateUsuario)
routerUser.delete('/usuarios/:id', deleteUsuario)
routerUser.get('/usuarios/:id', getUsuario)

module.exports = { routerUser }