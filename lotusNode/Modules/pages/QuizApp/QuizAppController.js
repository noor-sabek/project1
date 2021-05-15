const express = require('express');
const JsonDB = require('./QuizAppDB');




   let Quizpage = ()=>
   {
     console.log("Quizpage page controller")
     return ( JsonDB.quizPageJ)

   }


    module.exports= (req,res) => {res.json(Quizpage())}
