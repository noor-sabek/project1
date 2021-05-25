
const express = require('express');
const formJson = require('./formJson.json');
const headerJson=require('../../parts/header/headerController');
const footerJson = require('../../parts/footer/footerController.js');
const GeneralDb = require('../../general/DB/GeneralDb');


let formItems=()=>{
  // let DBquery = " ";
  // let DBresult = GeneralDb.dbTreatment(DBquery);
  // return(DBresult)
  return (formJson)
}
let signUpPage=()=>{
  console.log("signup in controller")

  return JSON.parse('{ "headerItems" :' +JSON.stringify(headerJson.headerItems())+',"Content" :'+ JSON.stringify(formItems())+',"footerItemss":'+JSON.stringify(footerJson.footerItems()) +'}')

}


module.exports.signup= signUpPage();
