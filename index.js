// Traer servidor de /src/app
const app = require('./src/app')

// Configurar variables de entorno 
require('dotenv').config()
const PORT = process.env.PORT || 3000

// Traer base de datos
require('./src/db/mongodb')

// Levantar servidor
app.listen(PORT, ()=>{
    console.log(`El servidor esta corriendo en el puerto: ${PORT}`)
})
