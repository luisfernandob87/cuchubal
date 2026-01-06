const { Usuario } = require('../models/usuario.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

class AuthService {
    async login(correo, password) {
        const user = await Usuario.findOne({ where: { correo } });

        if (!user || !(await bcrypt.compare(password, user.password))) {
            throw new Error('Credenciales inválidas');
        }

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET || 'secret', {
            expiresIn: '30d',
        });

        const userJson = user.toJSON();
        delete userJson.password;

        return { user: userJson, token };
    }

    async signup(nombre, correo, password) {
        const existingUser = await Usuario.findOne({ where: { correo } });
        if (existingUser) throw new Error('El correo ya está registrado');

        const salt = await bcrypt.genSalt(12);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = await Usuario.create({
            nombre,
            correo,
            password: hashedPassword
        });

        // Email functionality temporarily disabled
        console.log(`User created: ${newUser.correo}. (Welcome email skipped)`);

        const userJson = newUser.toJSON();
        delete userJson.password;

        return userJson;
    }
}

module.exports = new AuthService();
