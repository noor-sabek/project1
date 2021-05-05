
const express = require('express');
const router = express.Router();
const {getAllArticles,
       craeteArticle,
       updateArticle,
       deleteArticle  } = require('./artController');

//get/post/delete/update
//id for article to know witch one we want to update


router.get('/', getAllArticles);

//post
router.get('/craeteArticle',craeteArticle);

// router.patch('/:articleId',updateArticle);
router.get('/:articleId',updateArticle);

router.delete('/:articleId',deleteArticle);


module.exports = router;
