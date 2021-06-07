
const express = require('express');
const router = express.Router();
const headerJson=require('../../parts/header/headerController');
const footerJson = require('../../parts/footer/footerController.js');
// const formjson = require('./jsons/contactUsf.json');
// const AgeOptions = require('./jsons/ageOptions.json');
// const RelativeJson = require('./jsons/relativeJson.json');
// const GenderSelector = require('./jsons/selectGender.json');
const GeneralDb = require('../../general/DB/GeneralDb');

let form = async() => {
    return await GeneralDb.query(
      "SELECT * FROM `formlist` INNER JOIN `formItems`ON `formlist`.id = `formItems`.formID WHERE `name`='contact-us-form' AND `formItems`.id BETWEEN 7 AND 10 ")

}

let ageOptions = async() =>{
  return  await GeneralDb.query("SELECT * FROM `formlist` INNER JOIN `formItems`ON `formlist`.id = `formItems`.formID WHERE `name`='contact-us-form' AND inputID='ageOptions' ")
 }

let relative = async() =>{
  return await GeneralDb.query("SELECT * FROM `formlist` INNER JOIN `formItems`ON `formlist`.id = `formItems`.formID WHERE `name`='contact-us-form' AND inputID='relative' ")
}

let  genderSelector = async()=>{

  return await GeneralDb.query("SELECT * FROM `formlist` INNER JOIN `formItems`ON `formlist`.id = `formItems`.formID WHERE `name`='contact-us-form' AND inputID='genderSelector' ")
}
//
// let message = async() =>{
//   return await GeneralDb.query({"message":" "})
// }


let content =async ()=>{

return(
      {

        "form": await form(),
        "ageOptions": await ageOptions(),
        "relative":await relative(),
        "genderSelector": await genderSelector(),
        // "message": await message()

      })
}
 //add   all jsons in contact page
  module.exports.contactpageJ = async ()=>{
   console.log(" contact json in db")
   return JSON.parse('{ "headerItems" :'+ JSON.stringify( await headerJson.headerItems())+',"Content" :' +JSON.stringify( await content())+',"footerItems":'+JSON.stringify( await footerJson.footerItems()) +'}')

 }
