const express = require('express');
const router = express.Router();
// const QuesAns = require('./questions.json');
const headerJson=require('../../parts/header/headerController');
const footerJson = require('../../parts/footer/footerController.js');
const GeneralDb = require('../../general/DB/GeneralDb');


let questions = async()=> {
  console.log("ques")
  return await  GeneralDb.query("SELECT * FROM `quiz-questions` ")

}
let answers =async () => {
  console.log("  QuizContent  in db")
  return await  GeneralDb.query("SELECT * FROM `quiz-answeroptions` ")
}

let QuizContent =async () => {
  console.log("  QuizContent  in db")
return await  GeneralDb.query("SELECT `quiz-questions`.`questionText`, `quiz-answeroptions`.`answerText`, `quiz-answeroptions`.`isCorrect FROM ( ( `quiz` INNER JOIN `quiz-questions` ON `quiz-questions`.`id` = quiz.`QuestionID` ) INNER JOIN `quiz-answeroptions` ON `quiz-answeroptions`.`Q-num` = quiz.AnswersID )")

}

 //add  json


 module.exports.quizPageJ = async()=>{
   console.log("  quiz Json  in db")
   return JSON.parse('{ "headerItems" :'+ JSON.stringify( await headerJson.headerItems())+',"Content" :' +JSON.stringify(await QuizContent())+',"footerItems":'+JSON.stringify(await footerJson.footerItems()) +'}')

 }
