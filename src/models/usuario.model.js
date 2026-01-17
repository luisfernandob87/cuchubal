const { DataTypes } = require('sequelize')
const { sequelize } = require('../database/database')
const { UsuarioCuota } = require('./usuarioCuota.model')
const { Cuchubal } = require('./cuchubal.model')

const Usuario = sequelize.define('usuario', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    correo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telefono: {
        type: DataTypes.STRING,
        allowNull: true
    },
    zona: {
        type: DataTypes.STRING,
        allowNull: true
    }
})

Usuario.hasMany(UsuarioCuota, {
    foreignKey: 'idUsuario',
    sourceKey: 'id'
})

UsuarioCuota.belongsTo(Usuario, {
    foreignKey: 'idUsuario',
    targetId: 'id'
})

Usuario.hasMany(Cuchubal, {
    foreignKey: 'idUsuario',
    sourceKey: 'id'
})

Cuchubal.belongsTo(Usuario, {
    foreignKey: 'idUsuario',
    targetKey: 'id'
})

module.exports = { Usuario }