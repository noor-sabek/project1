const express = require('express');
const headerJson=require('../../parts/header/headerController');
const footerJson = require('../../parts/footer/footerController.js');
const GeneralDb = require('../../general/DB/GeneralDb');


let questions = async()=> {
  console.log("ques")
  return await  GeneralDb.query("SELECT * FROM `quiz-questions` ")

}
let answerOptions =async () => {
  console.log("  QuizContent  in db")
  return await  GeneralDb.query("SELECT Qnum,answerText,isCorrect FROM `quiz-answeroptions`  ")
}


let quizContent = async()=>{
console.log()
  return {
    "questions": await questions(),
    "answerOptions": await answerOptions()
  }
}
 // add  json


 module.exports.quizPageJ = async()=>{
   console.log( await quizContent())
   return JSON.parse('{ "headerItems" :'+ JSON.stringify( await headerJson.headerItems())+',"Content" :' +JSON.stringify(await quizContent())+',"footerItems":'+JSON.stringify(await footerJson.footerItems()) +'}')

 }
