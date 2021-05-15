const express = require('express');
const router = express.Router();
const QuesAns = require('./questions.json');
const headerJson=require('../../parts/header/headerController');
const footerJson = require('../../parts/footer/footerController.js');

let QuizContent = () => {
  console.log("  QuizContent  in db")
return(QuesAns)
}

 //add  json
 let QuizJson=()=>{
   console.log("  Json  in db")
   return JSON.parse('{ "header" :'+ JSON.stringify(headerJson.Header())+',"Content" :' +JSON.stringify(QuizContent())+',"Footer":'+JSON.stringify(footerJson.Footer()) +'}')

 }


 module.exports.quizPageJ = QuizJson();
