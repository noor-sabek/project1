
const express = require('express');
const formJson = require('./formJson.json');
const headerJson=require('../../parts/header/headerController');
const footerJson = require('../../parts/footer/footerController.js');
const GeneralDb = require('../../general/DB/GeneralDb');


let formItems = async() => {
    return await GeneralDb.query(
      "SELECT * FROM `formlist` INNER JOIN `formItems`ON `formlist`.id = `formItems`.formID WHERE `name`='sign-up-form' ")

}
module.exports.signup = async ()=>{
  console.log("signup db")

  return JSON.parse('{ "headerItems" :' +JSON.stringify( await headerJson.headerItems())+',"Content" :'+ JSON.stringify(await formItems())+',"footerItems":'+JSON.stringify( await footerJson.footerItems()) +'}')

}
