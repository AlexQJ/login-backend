// Traer mongoose para utilizar la BD
const mongoose = require("mongoose");


// Conectar la base de datos
const url = process.env.MONGO_URL

mongoose.connect(url, {}, ()=> {
    console.log("-----------------------------")
    console.log("Base de datos conectada")
    console.log("-----------------------------")
})

module.exports = mongoose