
const express = require('express');
const router = express.Router();
const contactForm = require('./contactUs.json');
const headerJson=require('../../parts/header/headerController');
const footerJson = require('../../parts/footer/footerController.js');
const GeneralDb = require('../../general/DB/GeneralDb');

let form = () => {
  // let DBquery = " ";
  // let DBresult = GeneralDb.dbTreatment(DBquery);
  // return(DBresult)
return(contactForm)
}

 //add  json
 let ContactUSJson=()=>{
   console.log(" contact json in db")
   return JSON.parse('{ "header" :'+ JSON.stringify(headerJson.Header())+',"Content" :' +JSON.stringify(form())+',"Footer":'+JSON.stringify(footerJson.Footer()) +'}')

 }



 module.exports.contactpageJ = ContactUSJson();
