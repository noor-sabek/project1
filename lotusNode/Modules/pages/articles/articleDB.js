const express = require('express')
const headerJson=require('../../parts/header/headerController');
const footerJson = require('../../parts/footer/footerController.js');
const GeneralDb = require('../../general/DB/GeneralDb')

let getAllArticles=()=>{
  return  (
    {  "message":'get all articles'}
  )
}



 //id for article to know witch one we want to update    // const articleId = req.params.articleId /- ${articleId}`;
 let updateArticle =(req) =>{
    return (
      { "message": "update article" })
  }

  let deleteArticle =(req)=>{
        return ( {"message": "delete article"})
      }


  let ArticlesContent=()=>{
    console.log("article db");
    return JSON.parse('{ "getAllArticles":'+JSON.stringify(getAllArticles())
    +',"updateArticle":'+ JSON.stringify(updateArticle())+',"updateArticle":'+JSON.stringify(updateArticle())+',"deleteArticle":'+JSON.stringify(deleteArticle())+'}')
    // let DBquery = " ";
    // let DBresult = GeneralDb.dbTreatment(DBquery);
    // return(DBresult)
  }
  let ArticlePage=()=>{
    console.log("article header")
    const artJson={
      "headerItems":headerJson.headerItems(),
      "content":ArticlesContent(),
      "footerItems":footerJson.footerItems()
    }
    return artJson
  }
module.exports.ArticlesResponse = ArticlePage();
