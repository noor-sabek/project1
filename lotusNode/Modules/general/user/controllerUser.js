
const express = require('express');
const adminResponse = require('./userDB');


//  ומחזירה אותו בקונטרוליר DBמקבלת מידע (גסון)מקובץ
let userPage = ()=>
{
  console.log("userPage")
return (adminResponse.AdminResponse)
}

 module.exports= (req,res) => {res.json(userPage())}
