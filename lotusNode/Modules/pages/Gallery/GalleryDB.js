
const express = require('express');
const router = express.Router();
const headerJson=require('../../parts/header/headerController');
const footerJson = require('../../parts/footer/footerController.js');
const GeneralDb = require('../../general/DB/GeneralDb');


let Gallery =async () => {
  return await GeneralDb.query("SELECT * FROM `galleryimages`")
}

 //add  json

 module.exports.AlbumpageJ = async ()=>{
  console.log(" Gallery json in db")
  return JSON.parse('{ "headerItems" :'+ JSON.stringify( await headerJson.headerItems())+',"Content" :' +JSON.stringify(  await Gallery())+',"footerItems":'+JSON.stringify( await footerJson.footerItems()) +'}')

}
