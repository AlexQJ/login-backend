// ? Requerir bcrypt para validar la encriptacion
const bcrypt = require('bcryptjs')

// ? Crear el servicio para autorizar la usuario ( clase anonima )
const AuthService = class {
    constructor (UserService){
        this.userService = UserService
    }

    async login(email, password) {
        const user = await this.userService.getByEmail(email)

        if(!user) {
            throw new Error('User not found')
        } else if (await bcrypt.compare(password, user.password) || !user ){    // Compara la contraseña que envia el front con la de la base de datos 
            return user.toObject();
        } else {
            throw new Error('Unauthorized')
        }
    }
}

module.exports = AuthService