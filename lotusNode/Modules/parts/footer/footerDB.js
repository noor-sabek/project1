const express = require('express')
const router = express.Router();

let  iconsf = require('./jsonForFooter/FooterIcons.json');
let  links= require('./jsonForFooter/Footerlinks.json');


let Icons =()=> {
  return(iconsf)
}


let Links =()=> {
  return(links)
}


//add content json
// let FooterContent=()=>{
//   console.log("footer")
//   return JSON.parse('{ "FooterIcons":'+JSON.stringify(Icons())
//   +',"Footerlinks":'+ JSON.stringify(Links()) +'}')
//
// }

let FooterContent ={

  "FooterIcons":Icons(),
  "Footerlinks":Links()

}
module.exports.footerDB = FooterContent;
