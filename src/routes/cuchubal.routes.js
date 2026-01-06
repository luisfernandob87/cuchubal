const { Router } = require('express')
const { createCuchubal, getCuchubalCuotas, getCuchubales, deleteCuchubal } = require('../controllers/cuchubal.controller')

const routerCuchubal = Router()

routerCuchubal.post('/cuchubal', createCuchubal)
routerCuchubal.get('/cuchubales/:id', getCuchubales)
routerCuchubal.get('/cuchubal/:id/cuotas', getCuchubalCuotas)
routerCuchubal.delete('/cuchubal/:id', deleteCuchubal)

module.exports = { routerCuchubal }