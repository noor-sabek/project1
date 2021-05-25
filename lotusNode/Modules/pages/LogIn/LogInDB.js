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
  return JSON.parse('{ "headerItems" :'+ JSON.stringify(headerJson.headerItems()) +',"Content" :' +JSON.stringify(logInItems())+',"footerItems":'+JSON.stringify(footerJson.footerItems()) +'}')

}

console.log("logIn db")


module.exports.logInPageJ = logInJson();
