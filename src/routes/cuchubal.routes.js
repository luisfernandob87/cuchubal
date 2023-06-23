const { Router } = require('express')
const { createCuchubal, getCuchubal, getCuchubalCuotas } = require('../controllers/cuchubal.controller')


const routerCuchubal = Router()

routerCuchubal.get('/cuchubal', getCuchubal)
routerCuchubal.post('/cuchubal', createCuchubal)
routerCuchubal.put('/cuchubal/:id')
routerCuchubal.delete('/cuchubal/:id')
routerCuchubal.get('/cuchubal/:id')

routerCuchubal.get('/cuchubal/:id/cuotas', getCuchubalCuotas)

module.exports = { routerCuchubal }