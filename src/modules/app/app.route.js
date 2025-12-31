const express = require("express");
const articleRouter = require("./Articles/article.route");
const appRouter = express.Router();

appRouter.use(`/articles`, articleRouter);

module.exports = appRouter;
