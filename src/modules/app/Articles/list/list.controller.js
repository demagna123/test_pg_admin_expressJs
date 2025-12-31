const listArticleService = require("./list.service");

async function listArticleController(req, res) {
  try {
    await listArticleService(req, res);
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "error",
    });
  }
}
module.exports = listArticleController;
