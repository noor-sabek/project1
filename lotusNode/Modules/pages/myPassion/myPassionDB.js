
const express = require('express');
const router = express.Router();
const headerJson=require('../../parts/header/headerController');
const footerJson = require('../../parts/footer/footerController.js');
const GeneralDb = require('../../general/DB/GeneralDb');


let passion = () => {
//   let DBquery = " ";
//   let DBresult = GeneralDb.dbTreatment(DBquery);
  // return(DBresult)
  return({"hi":"7"})
}

 //add  json
 let passionJson=()=>{
   console.log(" passion Json  in db")
   return JSON.parse('{ "headerItems" :'+ JSON.stringify(headerJson.headerItems())+',"Content" :' +JSON.stringify(passion())+',"footerItems":'+JSON.stringify(footerJson.footerItems()) +'}')

 }


 module.exports.passionpageJ = passionJson();
