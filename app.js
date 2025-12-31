require("dotenv").config();
const express = require("express");
const http = require("http");
const app = express();
const db = require("./src/data/models/Index.js");
const appRouter = require("./src/modules/app/app.route");

app.use(express.json());

const server = http.createServer(app);
app.use(appRouter);

// db.sequelize.sync({alter: true}).then(() => {
//   console.log("Database connected");
// });

const PORT = process.env.PORT || process.env.APP_PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server démarré au port ${PORT}`);
});

// module.exports = { io };
