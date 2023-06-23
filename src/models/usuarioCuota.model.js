const { DataTypes } = require('sequelize')
const { sequelize } = require('../database/database')

const UsuarioCuota = sequelize.define('usuarioCuota', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    numeroCuota: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

module.exports = { UsuarioCuota }