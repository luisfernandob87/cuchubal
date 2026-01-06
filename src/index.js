const { sequelize } = require('./database/database')
require('dotenv').config()
const { app } = require('./app')

const PORT = process.env.PORT || 3000;

async function main() {
  try {
    console.log("DB Config:", {
      host: process.env.DB_HOST,
      name: process.env.DB_NAME,
      user: process.env.DB_USER,
      pass: process.env.DB_PASSWORD ? '********' : 'UNDEFINED'
    });
    await sequelize.authenticate()
    console.log("Database connected successfully");

    await sequelize.sync({ force: false })

    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });

  } catch (error) {
    console.error("Connection error:", error)
  }
}

main()
