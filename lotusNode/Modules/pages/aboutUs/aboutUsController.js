
const express = require('express');
const router = express.Router();
const aboutUsJson=require('./aboutUsDB')



//  ומחזירה אותו בקונטרוליר DBמקבלת מידע (גסון)מקובץ

 module.exports.aboutUsPage= async (req,res) =>
 {
   console.log("about controller")
   res.json( await aboutUsJson.aboutUsPageJson())
 }
