
const express = require('express');
const user = require('./userDB');


//  ומחזירה אותו בקונטרוליר DBמקבלת מידע (גסון)מקובץ
let userPage = ()=>
{
  console.log("userPage")
return (user.AdminResponse)
}

 module.exports= (req,res) => res.json(userPage())
