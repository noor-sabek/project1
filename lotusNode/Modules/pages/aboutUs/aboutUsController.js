
const express = require('express');
const router = express.Router();
const aboutUsJson=require("./aboutUsDB")



//  ומחזירה אותו בקונטרוליר DBמקבלת מידע (גסון)מקובץ
let aboutUsPage = ()=>
{
   console.log("aboutUsPage")
  return (aboutUsJson.aboutUsPageJson)
}


 module.exports= (req,res) => {res.json(aboutUsPage())}
