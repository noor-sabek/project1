const express = require('express')
const Json = require('./LogInDB.js')




//  ומחזירה אותו בקונטרוליר DBמקבלת מידע (גסון)מקובץ

 module.exports.loginPage= async (req,res) =>
 {
   console.log("log in  controller")
   res.json(await Json.logInPageJ())
 }
