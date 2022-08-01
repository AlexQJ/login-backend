
// crear el servicio para guardar usuarios con una  clase anonima
const UserService = class {
    constructor(UserModel){
        this.Model =  UserModel
    }

    async create(userData) {
        const newUser = new this.Model(userData)

        console.log(newUser)
        await newUser.save()


        delete newUser.password // ? ESTA Funcion se usa cuando se encripta la contraseña, para que antes de save() elimine la contraseña que dio el usuario y se guarde la contraseña encriptada ( con la funcion pre en el modelo)
        
        return newUser.toObject()

    }

    // ? Crear servicio para encontrar algun usuario con el correo proporcionado para loggearse
    getByEmail(email){
        return this.Model.findOne({email})
    }
}

// Exportar servicio para utilizarlo en las rutas (apis)
module.exports = UserService