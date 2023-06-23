const { Router } = require('express')
const { createCuchubal, getCuchubal } = require('../controllers/cuchubal.controller')


const routerCuchubal = Router()

routerCuchubal.get('/cuchubal', getCuchubal)
routerCuchubal.post('/cuchubal', createCuchubal)
routerCuchubal.put('/cuchubal/:id')
routerCuchubal.delete('/cuchubal/:id')
routerCuchubal.get('/cuchubal/:id')

module.exports = { routerCuchubal }