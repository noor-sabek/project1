const express = require('express')
const Json = require('./LogInDB.js')




//  ומחזירה אותו בקונטרוליר DBמקבלת מידע (גסון)מקובץ
let loginPage = ()=>
{
  console.log("homePage")
return (Json.logInPageJ)
}


 module.exports= (req,res) => {res.json(loginPage())}
