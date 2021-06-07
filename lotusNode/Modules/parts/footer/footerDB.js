const express = require('express')
const router = express.Router();
const GeneralDb = require('../../general/DB/GeneralDb');

// let  iconsf = require('./jsonForFooter/FooterIcons.json');
// let  links= require('./jsonForFooter/Footerlinks.json');


let FooterIcons = async () => {
  return await GeneralDb.query("SELECT * FROM (`footerlist`INNER JOIN `footeritems` ON footerlist.id=footeritems.part) WHERE name='footerIcons'")
  // return(iconsf)
}


let Footerlinks = async() => {
    return await GeneralDb.query("SELECT * FROM (`footerlist`INNER JOIN `footeritems` ON footerlist.id=footeritems.part) WHERE name='footerLinks'")
}


module.exports.footerDB =async ()=>{
  return JSON.parse('{ "FooterIcons" :'+ JSON.stringify( await FooterIcons())+',"Footerlinks" :' +JSON.stringify( await Footerlinks())+'}')
}
