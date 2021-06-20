
const express = require('express');
const headerJson=require('../../parts/header/headerController');
const footerJson = require('../../parts/footer/footerController.js');
const GeneralDb = require('../../general/DB/GeneralDb');


module.exports.InsertSignup = async(name,password,confirmPass,mail) =>{
  console.log(name)
  return await GeneralDb.query( "INSERT INTO `users`( `name`, `password`, `confirmPass`, `mail`) VALUES ("+name+","+password+","+confirmPass+","+mail+");")
}
