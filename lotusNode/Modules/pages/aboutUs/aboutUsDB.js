
const express = require('express');
const router = express.Router();
const aboutUsJson=require('./aboutUsJson.json');
const headerJson = require('../../parts/header/headerController.js');

let AboutUsJson =()=>{
  return(aboutUsJson)
}

 module.exports.aboutUsPage = (req , res) => {
   console.log("aboutUsJson")
    res.json({
    "header":headerJson.Header(),
    "content":AboutUsJson()
    // "footer":""
  });
 }
