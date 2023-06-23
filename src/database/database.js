const Sequelize = require('sequelize')

const sequelize = new Sequelize('cuchubal', 'postgres', 'root', {
    host: 'localhost',
    dialect: 'postgres'
})

module.exports = { sequelize }