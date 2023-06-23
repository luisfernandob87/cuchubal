const { DataTypes } = require('sequelize')
const { sequelize } = require('../database/database')
const { UsuarioCuota } = require('./usuarioCuota.model')

const Cuchubal = sequelize.define('cuchubal', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nombreCuchubal: {
        type: DataTypes.STRING,
        allowNull: false
    },
    formaPago: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fechaInicio: {
        type: DataTypes.DATE,
        allowNull: false
    },
    noParticipantes: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    cuotaPorParticipante: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    sorteo: {
        type: DataTypes.BOOLEAN,
    }
})

Cuchubal.hasMany(UsuarioCuota, {
    foreignKey: 'idCuchubal',
    sourceKey: 'id'
})

UsuarioCuota.belongsTo(Cuchubal, {
    foreignKey: 'idCuchubal',
    targetId: 'id'
})

module.exports = { Cuchubal }