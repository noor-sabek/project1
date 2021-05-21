const express = require('express');
const router = express.Router();
const headerJson=require('../../parts/header/headerController.js');
const footerJson = require('../../parts/footer/footerController.js');
const logInjson = require('./logInjson.json')



let logInItems = ()=>{
  // let DBquery = " ";
  // let DBresult = GeneralDb.dbTreatment(DBquery);
  // return(DBresult)
  // //
  return (logInjson)
}


let logInJson=()=>{
  console.log("logInJson in db")
  return JSON.parse('{ "header" :'+ JSON.stringify(headerJson.Header()) +',"Content" :' +JSON.stringify(logInItems())+',"Footer":'+JSON.stringify(footerJson.Footer()) +'}')

}

console.log("logIn db")


module.exports.logInPageJ = logInJson();
