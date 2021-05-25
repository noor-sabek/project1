const express = require('express')
const router = express.Router();
const GeneralDb = require('../../general/DB/GeneralDb');

let  iconsf = require('./jsonForFooter/FooterIcons.json');
let  links= require('./jsonForFooter/Footerlinks.json');


let FooterIcons = async () => {
  return await GeneralDb.query("SELECT * FROM  footeritems WHERE part = 1")
  // return(iconsf)
}


let Footerlinks = async() => {
    return await GeneralDb.query("SELECT * FROM  footeritems WHERE part = 2")
}


module.exports.footerDB =async ()=>{
  return JSON.parse('{ "FooterIcons" :'+ JSON.stringify( await FooterIcons())+',"Footerlinks" :' +JSON.stringify( await Footerlinks())+'}')
}
