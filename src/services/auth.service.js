const { Usuario } = require('../models/usuario.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const brevo = require('@getbrevo/brevo');

// Configuration for Brevo
const apiInstance = new brevo.TransactionalEmailsApi();
if (process.env.BREVO_API_KEY) {
    apiInstance.setApiKey(brevo.TransactionalEmailsApiApiKeys.apiKey, process.env.BREVO_API_KEY);
}

class AuthService {
    async login(correo, password) {
        const user = await Usuario.findOne({ where: { correo } });

        if (!user || !(await bcrypt.compare(password, user.password))) {
            throw new Error('Credenciales inválidas');
        }

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET || 'secret', {
            expiresIn: '30d',
        });

        // Remove password from object
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

        // Async sending email (don't block)
        this.sendWelcomeEmail(newUser).catch(err => console.error('Email error:', err));

        const userJson = newUser.toJSON();
        delete userJson.password;

        return userJson;
    }

    async sendWelcomeEmail(user) {
        if (!process.env.BREVO_API_KEY) return;

        const sendSmtpEmail = new brevo.SendSmtpEmail();
        sendSmtpEmail.subject = "Bienvenido a Cuchubal App";
        sendSmtpEmail.to = [{ email: user.correo, name: user.nombre }];
        sendSmtpEmail.htmlContent = `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #eee;">
                <h1 style="color: #6366f1;">Hola ${user.nombre}</h1>
                <p>Bienvenido a la plataforma más moderna para gestionar tus cuchubales.</p>
                <p>Ya puedes empezar a crear tus grupos de ahorro.</p>
                <a href="${process.env.FRONTEND_URL}" style="background: #6366f1; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Ir a la App</a>
            </div>
        `;
        sendSmtpEmail.sender = { name: "Cuchubal Admin", email: "admin@cuchubal.com" };

        return apiInstance.sendTransacEmail(sendSmtpEmail);
    }
}

module.exports = new AuthService();
