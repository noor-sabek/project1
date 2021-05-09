
const express = require('express');
const users = require('./signUp');
const headerJson=require('../../parts/header/headerController');
const footerJson = require('../../parts/footer/footerController.js');

let signup=()=>{
return(users)
}
let signuppageJson=()=>{
  console.log("signup in controller")

  return JSON.parse('{ "header" :' +JSON.stringify(headerJson.Header())+',"Content" :'+ JSON.stringify(signup())+',"Footer":'+JSON.stringify(footerJson.Footer()) +'}')

}


module.exports.signup= signuppageJson();
