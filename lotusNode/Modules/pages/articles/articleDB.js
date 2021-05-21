const express = require('express')
const headerJson=require('../../parts/header/headerController');
const footerJson = require('../../parts/footer/footerController.js');
const GeneralDb = require('../../general/DB/GeneralDb')

let getAllArticles=()=>{
  return  (
    {  "message":'get all articles'}
  )
}

let craeteArticle =()=> {
    return (
    { "message":'create a new article'}
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
    +',"craeteArticle":'+ JSON.stringify(craeteArticle())+',"updateArticle":'+JSON.stringify(updateArticle())+',"deleteArticle":'+JSON.stringify(deleteArticle())+'}')
    // let DBquery = " ";
    // let DBresult = GeneralDb.dbTreatment(DBquery);
    // return(DBresult)
  }
  let ArticlePage=()=>{
    console.log("article header")
    const artJson={
      "header":headerJson.Header(),
      "content":ArticlesContent(),
      "footer":footerJson.Footer()
    }
    return artJson
  }
module.exports.ArticlesResponse = ArticlePage();
