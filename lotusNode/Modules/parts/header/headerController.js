const express = require('express')
const headerDB = require('./headerDB.js');



 //  ומחזירה אותו בקונטרוליר DBמקבלת מידע (גסון)מקובץ
 let headerItems = ()=>
 {
   console.log("footerPage")
 return (headerDB.Header)
 }


  module.exports.Header= (req,res) => headerItems()
