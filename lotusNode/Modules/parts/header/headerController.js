const express = require('express')
const headerDB = require('./headerDB.js');



 //  ומחזירה אותו בקונטרוליר DBמקבלת מידע (גסון)מקובץ
  module.exports.headerItems =async (req,res)=>
 {
   console.log(" header controller")
     return await headerDB.Header()
 }
