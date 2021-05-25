const express = require('express');
const router = express.Router();
const footerJson = require('./footerDB.js');


//  ומחזירה אותו בקונטרוליר DBמקבלת מידע (גסון)מקובץ
 module.exports.footerItems = async(req,res)=>
{
  console.log("footer")
return await footerJson.footerDB()
}
