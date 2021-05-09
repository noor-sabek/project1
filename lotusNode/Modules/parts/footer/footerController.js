const express = require('express');
const router = express.Router();
const footerJson = require('./footerDB.js');





//  ומחזירה אותו בקונטרוליר DBמקבלת מידע (גסון)מקובץ
let footerItems = ()=>
{
  console.log(footerJson.footerDB)
return (footerJson.footerDB)
}


 module.exports.Footer = (req,res) => footerItems()
