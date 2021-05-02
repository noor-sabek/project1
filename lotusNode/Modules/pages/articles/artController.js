module.exports={


 getAllArticles:(req, res) => {
     res.status(200).json({
      message:'get all articles'
    })
},
 craeteArticle:(req, res) => {
    res.status(200).json({
     message:'create a new article'
    })
 },
 //id for article to know witch one we want to update
 updateArticle:(req, res) => {
   const articleId = req.params.articleId;
    res.status(200).json({
     message: `update article - ${articleId}`
    })
  },
 deleteArticle:(req, res) => {
    const articleId = req.params.articleId;
     res.status(200).json({
      message: `delete article - ${articleId}`
    })
  }
}
