const express = require('express');
const JsonDB = require('./myPassionDB');




   let passionpage = ()=>
   {
     console.log("passion page controller")
   return (JsonDB.passionpageJ)
   }


    module.exports= (req,res) => {res.json(passionpage())}
