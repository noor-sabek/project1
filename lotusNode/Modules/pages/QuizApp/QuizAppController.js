const express = require('express');
const JsonDB = require('./QuizAppDB');




    module.exports.Quizpage= async(req,res) =>
     {
        console.log("Quizpage page controller")
       res.json(  await JsonDB.quizPageJ())
     }
