const express = require('express')
const routes = require('./routes')

const app = express()


// middlewares
app.use(express.json())

app.use(routes)
//iniciando o servidor na porta 3333
app.listen(3333, () => {
    console.log('Servidor rodando na porta 3333')
})

