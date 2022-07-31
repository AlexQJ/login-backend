// Traer express para configurar el servidor
const express = require('express')
const app = express();
// Traer cors para evitar problemas de peticiones desde front
const cors = require('cors')
// Traer rutas de api para utilizarla como middleware y se ejecute
const apiRouter = require('./apis') // Traerá index

app.use(cors())         //* Iniciar cors al principio de todo
app.use(express.json()) //*Middleware que parsea todas las peticiones a json. Basado en bodyparser.

app.use('/api/v1',apiRouter)//*Utilizar middleware que creamos para las rutas

app.use('/',(req,res)=>{
    res.send({
        message: "Servidor funcionando"
    })
})

// exportar servidor para utilizarlo en index
module.exports = app;

