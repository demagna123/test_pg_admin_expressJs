const db = require("../../../../data/models/Index.js");

const Article = db.articles;

async function listArticleService(req, res) {
  try {
    const articles = await Article.findAll();

    return res.status(200).json({
      success: true,
      data: articles,
      message: "succcdf",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "error" + error,
    });
  }
}
module.exports = listArticleService;
