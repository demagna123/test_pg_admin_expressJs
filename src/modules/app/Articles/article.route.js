const express = require("express");
const listArticleController = require("./list/list.controller");
const createArticleController = require("./create/create.controller");

const articleRouter = express.Router();

articleRouter.get(`/`, listArticleController);
articleRouter.post(`/`, createArticleController);
// articleRouter.delete(`/:id`, deleteTransferController);
// articleRouter.put(`/:id`, upload.none(), updateTransferController);
module.exports = articleRouter;
