
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

  return JSON.parse('{ "header" :' +JSON.stringify(headerJson.Header())+',"Content" :'+ JSON.stringify(formItems())+',"Footer":'+JSON.stringify(footerJson.Footer()) +'}')

}


module.exports.signup= signUpPage();
