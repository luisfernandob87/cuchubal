const { Router } = require('express')
const { createUsuarioCuota, getUsuarioCuota } = require('../controllers/usuarioCuota.controller')


const routerUsuarioCuota = Router()

routerUsuarioCuota.get('/cuota', getUsuarioCuota)
routerUsuarioCuota.post('/cuota', createUsuarioCuota)
routerUsuarioCuota.put('/cuota/:id')
routerUsuarioCuota.delete('/cuota/:id')
routerUsuarioCuota.get('/cuota/:id')

module.exports = { routerUsuarioCuota }