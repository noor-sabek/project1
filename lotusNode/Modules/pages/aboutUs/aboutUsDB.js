
const express = require('express');
const router = express.Router();
const aboutUsJson=require('./aboutUsJson.json');
const headerJson = require('../../parts/header/headerController.js');
const footerJson = require('../../parts/footer/footerController.js');
const GeneralDb = require('../../general/DB/GeneralDb');



let AboutUsContentJson = async() => {
    return await GeneralDb.query("SELECT * FROM `cardsitems` WHERE `card-for`='about-us-page'")
  }



 module.exports.aboutUsPageJson = async()=>{
return({
       "headerItems": await headerJson.headerItems(),
       "content": await AboutUsContentJson(),
       "footerItems": await footerJson.footerItems()
    });
 }
