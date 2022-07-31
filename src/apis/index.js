// Traer express, funcion rutas y ruta creada en user
const express = require('express')
const router = express.Router();
const UsersRouter = require('./user')


// Crear la ruta donde se utilizara las funciones para crear usuario ( se extiende de la ruta de app. )
router.use('/users', UsersRouter) // quedaria algo como: '/api/v1/users'

module.exports = router