const express = require('express');
const headerJson=require('../../parts/header/headerController.js');
const footerJson = require('../../parts/footer/footerController.js');
const GeneralDb = require('../../general/DB/GeneralDb');


let logInItems = async()=>{

  return await GeneralDb.query("SELECT * FROM `formlist` INNER JOIN `formItems`ON `formlist`.id = `formItems`.formID WHERE `name`='log-in-form'")

}


module.exports.logInPageJ = async () => {

  console.log("logInJson in db")

  return JSON.parse('{ "headerItems" :'+ JSON.stringify( await headerJson.headerItems()) +',"Content" :' +JSON.stringify(await logInItems())+',"footerItems":'+JSON.stringify(await footerJson.footerItems()) +'}')

}
