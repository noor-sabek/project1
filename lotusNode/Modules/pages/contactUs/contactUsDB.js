
const express = require('express');
const router = express.Router();
const formjson = require('./contactUsf.json');
const headerJson=require('../../parts/header/headerController');
const footerJson = require('../../parts/footer/footerController.js');
const AgeOptions = require('./ageOptions.json');
const GeneralDb = require('../../general/DB/GeneralDb');
const RelativeJson = require('./relativeJson.json');
const GenderSelector = require('./selectGender.json');
let form = () => {
  // let DBquery = " ";
  // let DBresult = GeneralDb.dbTreatment(DBquery);
  // return(DBresult)
return(formjson)
}

let ageOptions=() =>{
  return (AgeOptions)
 }

let relative=() =>{
  return (RelativeJson)
}

let  genderSelector =()=>{

  return (GenderSelector)
}

let message = () =>{
  return({"message":" "})
}


let content = ()=>{
// {
//   return JSON.parse(
//   '{ "form" :'+ JSON.stringify(form())
//   + ',"ageOptions" :' +JSON.stringify(ageOptions())
//   +',"relative":'+JSON.stringify(relative())
//   +',"genderSelector":'+JSON.stringify(genderSelector())
//   +',"message":'+JSON.stringify(message())
//   +'}')
// }
return(
      {

        "form":form(),
        "ageOptions":ageOptions(),
        "relative":relative(),
        "genderSelector":genderSelector(),
        "message":message()

      })
}
 //add   all jsons in contact page
 let ContactUSJson=()=>{
   console.log(" contact json in db")
   return JSON.parse('{ "headerItems" :'+ JSON.stringify(headerJson.headerItems())+',"Content" :' +JSON.stringify(content())+',"footerItems":'+JSON.stringify(footerJson.footerItems()) +'}')

 }



 module.exports.contactpageJ = ContactUSJson();
