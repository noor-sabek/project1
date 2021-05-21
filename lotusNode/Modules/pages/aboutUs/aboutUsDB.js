
const express = require('express');
const router = express.Router();
const aboutUsJson=require('./aboutUsJson.json');
const headerJson = require('../../parts/header/headerController.js');
const footerJson = require('../../parts/footer/footerController.js');
const GeneralDb = require('../../general/DB/GeneralDb');



let AboutUsContentJson =()=>{
  // let DBquery = " ";
  // let DBresult = GeneralDb.dbTreatment(DBquery);
  return(aboutUsJson)
}

let AboutUsPageJson ={

  "header":headerJson.Header(),
  "content":AboutUsContentJson(),
  "Footer":footerJson.Footer()

}

 module.exports.aboutUsPageJson = AboutUsPageJson;
