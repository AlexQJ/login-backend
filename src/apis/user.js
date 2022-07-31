// Traer express y funcion rutas
const express = require('express')
const router = express.Router();


// Traer modelo para crear usuarios
const UserModel = require('../models/users')
// Trear servicio de creacion de usuarios
const UserService = require('../services/users')

// CREAR FUNCION para crear el usuario a partir del modelo. ** Fijarse en el nombre nombre del metodo y recordar que era una clase y cada instancia usa new
const userService = new UserService(UserModel)

router.post('/', async (req,res)=>{
    const body = req.body;
    // CREAR USUARIO
    const user = await userService.create(body) // la funcion create fue creada en SERVICES en la clase anonim


    res.status(201).send(user) // Estatus 201 es de "creado"
})


// Exportar rutas
module.exports = router
