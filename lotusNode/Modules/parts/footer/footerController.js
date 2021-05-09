const express = require('express')
const footerJson = require('./footerDB.js');





//  ומחזירה אותו בקונטרוליר DBמקבלת מידע (גסון)מקובץ
let footerItems = ()=>
{
  console.log("footerPage")
return (footerJson.footer)
}


 module.exports.Footer= (req,res) => footerItems()
