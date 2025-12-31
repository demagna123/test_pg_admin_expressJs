const createArticleService = require("./create.service");

async function createArticleController(req, res) {
  try {
    await createArticleService(req, res);
  } catch (error) {
    console.error(error); // log complet dans Render logs
    return res.status(400).json({
      success: false,
      message: error.message,
      stack: error.stack, // optionnel pour debug
    });
  }
}
module.exports = createArticleController;
