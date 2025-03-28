const { Router } = require('express')
const { createCuchubal, getCuchubalCuotas, getCuchubales, deleteCuchubal } = require('../controllers/cuchubal.controller')


const routerCuchubal = Router()


routerCuchubal.post('/cuchubal', createCuchubal)
routerCuchubal.put('/cuchubal/:id')
routerCuchubal.delete('/cuchubal/:id', deleteCuchubal)


routerCuchubal.get('/cuchubal/:id')

routerCuchubal.get('/cuchubal/:id/cuotas', getCuchubalCuotas)

routerCuchubal.get('/cuchubales/:id', getCuchubales)

module.exports = { routerCuchubal }