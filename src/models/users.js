// Traer mongoose y funciones para crear el schema y modelos
const mongoose = require("mongoose");
const { Schema , model} = mongoose
// ? Traer bcrypt para encriptar token
const bcrypt = require('bcryptjs')

// Crear esquema ( para definir lo que requerirá la coleccion users)
const UserSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    lastname: {
        type: String
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
}, {
    versionKey: false,
    timestamps: true
})


// ? Auth. Crear un middleware para autorizacion de usuarios
UserSchema.pre('save', function (next){     // Pre() indica que antes de que la funcion que se indique como parametro 1, se ejecutará lo que este en este método. ( Antes de save() en este caso) 
    console.log('----------antes-----------')
    console.log(this.email, this.password)
    console.log('---------------------')
    // Encriptar la contraseña
    const hashedPassword = bcrypt.hashSync(this.password, 12)// Param 2 indica cuantos caracteres devolverá

    this.password = hashedPassword
    console.log('----------despues----------') // Ésta es la contraseña que se almacenará cuando finalmente se ejecute save()en los services para guardar en la base de datos
    console.log(this.email, this.password)
    console.log('---------------------')

    next() // Luego se ejecuta el parametro 2 de pre() para que continue con las sigs. ejecuciones normales despues de este middleware
})    

// Crear el modelo de la coleccion con el Schema definido antes
                       //Colecc, //Schema
const UserModel = model('users', UserSchema)

// Exportar el modelo para utilizarlo en services ( en otras estructuras se enviaba a controllers)
// En este caso el servicio seria para el logeo de usuarios
module.exports = UserModel
