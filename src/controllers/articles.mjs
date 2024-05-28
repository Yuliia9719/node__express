// articles
const getArticlesHandler = (req, res) => {
  res.end("Response from get articles route");
};
const postArticlesHandler = (req, res) => {
  res.end("Response from post articles route");
};

// articles/:articleId
const getArticleByIdHandler = (req, res) => {
  const articleId = req.params["articleId"];
  res.end(`Get article by id ${articleId}`);
};

const deleteArticleByIdHandler = (req, res) => {
  const articleId = req.params["articleId"];
  res.end(`Delete article by id ${articleId}`);
};

const putArticleByIdHandler = (req, res) => {
  const articleId = req.params["articleId"];
  res.end(`Put article by id ${articleId}`);
};

export {
  getArticlesHandler,
  postArticlesHandler,
  getArticleByIdHandler,
  deleteArticleByIdHandler,
  putArticleByIdHandler
};
