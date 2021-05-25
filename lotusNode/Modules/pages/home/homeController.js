const express = require('express')
const Json = require('./homeDB.js')


//  ומחזירה אותו בקונטרוליר DBמקבלת מידע (גסון)מקובץ
 module.exports.homePage = async (req,res)=>
{
  console.log( "home controller")
  res.json(await Json.homepageJ())
}
