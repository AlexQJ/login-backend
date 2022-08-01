// Traer express, funcion rutas y ruta creada en user
const express = require('express')
const router = express.Router();
const UsersRouter = require('./user')

// Traer funcion para crear ruta de autorizar al usuario
const authRouter = require('./auth')

// Crear la ruta donde se utilizara las funciones para crear usuario ( se extiende de la ruta de app. )
router.use('/users', UsersRouter) // quedaria algo como: '/api/v1/users'

// Crear la ruta para autorizar al usuario
router.use('/auth', authRouter) // quedaria algo como : '/api/v1/auth'

module.exports = router