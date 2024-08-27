const { app } = require('./app')
const { sequelize } = require('./database/database')


async function main() {
    try {
      await sequelize.authenticate()
      
      await sequelize.sync({ force: false })
      console.log("Conection succesfully");
      app.listen(3000)
      
      console.log('listen on port 3000');
    } catch (error) {
      console.error("Error de conexion")
    }
  }
  
  main()
  
