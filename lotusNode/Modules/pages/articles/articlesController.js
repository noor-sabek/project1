
const express = require('express');
const articles = require('./articleDB');

//get/post/delete/update
//id for article to know witch one we want to update



 module.exports =(req, res)=>{
 res.json( articles.ArticlesResponse)
 }


// //post
// router.get('/craeteArticle',articles.Articles.craeteArticle);
//
// // router.patch('/:articleId',updateArticle);
// router.get('/:articleId',articles.Articles.updateArticle);
//
// router.delete('/:articleId',articles.Articles.deleteArticle);
