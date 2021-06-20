
const express = require('express');
const headerJson=require('../../parts/header/headerController');
const footerJson = require('../../parts/footer/footerController.js');
const GeneralDb = require('../../general/DB/GeneralDb');


// structure query from db ,storing and managing the data 
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


let content =async ()=>{

return(
      {

        "form": await form(),
        "ageOptions": await ageOptions(),
        "relative":await relative(),
        "genderSelector": await genderSelector(),


      })
}
 //add   all jsons in contact page
  module.exports.contactpageJ = async ()=>{
   console.log(" contact json in db")
   return JSON.parse('{ "headerItems" :'+ JSON.stringify( await headerJson.headerItems())+',"Content" :' +JSON.stringify( await content())+',"footerItems":'+JSON.stringify( await footerJson.footerItems()) +'}')

 }
