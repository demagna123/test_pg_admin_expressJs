const dbConfig = require("../../configs/db.config.js");
const { Sequelize, DataTypes } = require("sequelize");

let sequelize;

const dialect = dbConfig.dialect || "postgres";

if (dbConfig.url) {
  sequelize = new Sequelize(dbConfig.url, {
    dialect,
    dialectOptions: {
      ssl: { require: true, rejectUnauthorized: false },
    },
    pool: dbConfig.pool,
    logging: false,
  });
} else {
  sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect,
    pool: dbConfig.pool,
    logging: false,
  });
}

// Test de connexion
sequelize
  .authenticate()
  .then(() => {
    console.log("Database connected...");
  })
  .catch((err) => {
    console.error("Error connecting to DB:", err);
  });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./User.js")(sequelize, DataTypes);
db.articles = require("./Article.js")(sequelize, DataTypes);

module.exports = db;
