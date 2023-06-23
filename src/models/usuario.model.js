const { DataTypes } = require('sequelize')
const { sequelize } = require('../database/database')
const { UsuarioCuota } = require('./usuarioCuota.model')

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

module.exports = { Usuario }