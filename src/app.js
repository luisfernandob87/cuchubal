const express = require("express")
const { routerUser } = require('./routes/usuario.routes')
const { routerCuchubal } = require('./routes/cuchubal.routes')
const { routerUsuarioCuota } = require('./routes/usuarioCuota.routes')


const app = express()

//middleware
app.use(express.json())

app.use(routerUser)

app.use(routerCuchubal)

app.use(routerUsuarioCuota)

module.exports = { app }