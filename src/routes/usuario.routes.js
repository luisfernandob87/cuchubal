const { Router } = require('express')
const { getUsuarios, deleteUsuario, getUsuario, getUsuarioCuotas, getMisCuotas } = require('../controllers/usuarios.controller')

const routerUser = Router()

routerUser.get('/usuarios', getUsuarios)
routerUser.delete('/usuario/:id', deleteUsuario)
routerUser.get('/usuario/:id', getUsuario)

routerUser.get('/usuario/:id/miscuotas', getMisCuotas)

module.exports = { routerUser }