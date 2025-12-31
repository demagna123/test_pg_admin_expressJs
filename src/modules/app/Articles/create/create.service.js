const db = require("../../../../data/models/Index.js");

const Article = db.articles;

async function createArticleService(req, res) {
  try {
    const { name, category } = req.body;
    const article = await Article.create({
      name: name,
      category: category,
    });

    return res.status(200).json({
      success: true,
      message: "succcdf",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "error",
    });
  }
}
module.exports = createArticleService;
