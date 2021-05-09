const express = require('express')
const Json = require('./homeDB.js')




//  ומחזירה אותו בקונטרוליר DBמקבלת מידע (גסון)מקובץ
let homePage = ()=>
{
  console.log("homePage")
return (Json.homepageJ)
}


 module.exports= (req,res) => {res.json(homePage())}
