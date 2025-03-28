const Sequelize = require('sequelize')

// PostgreSQL configuration
/*
const sequelize = new Sequelize('cuchubal', 'postgres', 'root', {
    host: 'localhost',
    dialect: 'postgres'
})
*/

// SQLite configuration
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'
})

module.exports = { sequelize }