const { Cuchubal } = require('../models/cuchubal.model');
const { UsuarioCuota } = require('../models/usuarioCuota.model');
const { Usuario } = require('../models/usuario.model');

class CuchubalService {
    async create(data) {
        return await Cuchubal.create(data);
    }

    async getByUserId(userId) {
        return await Cuchubal.findAll({
            where: { idUsuario: userId },
            include: [{ model: Usuario }]
        });
    }

    async getCuotas(cuchubalId) {
        return await UsuarioCuota.findAll({
            where: { idCuchubal: cuchubalId },
            include: [{ model: Cuchubal }, { model: Usuario }]
        });
    }

    async delete(id) {
        const cuchubal = await Cuchubal.findByPk(id);
        if (!cuchubal) throw new Error('Cuchubal no encontrado');
        return await cuchubal.destroy();
    }
}

module.exports = new CuchubalService();
