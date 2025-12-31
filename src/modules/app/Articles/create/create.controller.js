const createArticleService = require("./create.service")

async function createArticleController(req, res) {
    try {
        await createArticleService(req, res)
    } catch (error) {
        return res.status(400).json({
      success: false,
      message: "error",
    });
    }
}
module.exports = createArticleController