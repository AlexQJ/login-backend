// ? Importar JWT para desencriptar la contraseña guardada y autorizar y validar
const jwt = require('jsonwebtoken');
// ? Importar express y router para las rutas de validaciones del usuario
const express = require('express');
const router = express.Router()
// ?Importar servicios de guardar usuario y el modelo ( En este punto se agrega otro servicio en el archivo para validar y autorizar)
const UserService = require('../services/users');
const UserModel = require('../models/users');
const AuthService = require('../services/auth');

// ? Importar variables de entorno para la palabra secreta de JWT
require('dotenv').config()


const userService = new UserService(UserModel)
const authService = new AuthService(userService)
const JWT_SECRET = process.env.JWT_SECRET


// ? Crear la ruta para loggear al usuario
router.post('/login', async (req,res) =>{
    const { email, password } = req.body

    try {
        const user = await authService.login(email, password)
        const userRole = {
            ...user,
            role: 'admin',
            permissions: ['users:foo']
        }


        const token = jwt.sign({
            data: userRole,
            exp: Math.floor(Date.now()/1000)+(60*60)
        }, JWT_SECRET)
        
        res.send({
            _id: user._id,
            token
        })

    } catch (error) {
        console.log(error)
        res.status(401).send({
            message:error.message
        })
    }
})

module.exports = router

