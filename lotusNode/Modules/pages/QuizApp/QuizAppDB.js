const express = require('express');
const router = express.Router();
const QuesAns = require('./questions.json');
const headerJson=require('../../parts/header/headerController');
const footerJson = require('../../parts/footer/footerController.js');
const GeneralDb = require('../../general/DB/GeneralDb');


let ques = async()=> {
  console.log("ques")
  return await  GeneralDb.query("SELECT * FROM `quiz-questions` ")
  // return(homeCarouselJson)
}
let QuizContent =async () => {
  console.log("  QuizContent  in db")
return(QuesAns)
    // let DBquery = " ";
    // let DBresult = GeneralDb.dbTreatment(DBquery);
    // return(DBresult)
}

 //add  json


 module.exports.quizPageJ = async()=>{
   console.log("  quiz Json  in db")
   return JSON.parse('{ "headerItems" :'+ JSON.stringify( await headerJson.headerItems())+',"Content" :' +JSON.stringify(await QuizContent())+',"footerItems":'+JSON.stringify(await footerJson.footerItems()) +'}')

 }
