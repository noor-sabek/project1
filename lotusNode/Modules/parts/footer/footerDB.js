const express = require('express')



let  iconsf = require('./jsonforFooter/FooterIcons.json');
let  links= require('./jsonforFooter/Footerlinks.json');


let Icons =()=> {
  return(iconsf)
}


let Links =()=> {
  return(links)
}


//add content json
let FooterContent=()=>{
  console.log("footer")
  return JSON.parse('{ "FooterIcons":'+JSON.stringify(Icons())
  +',"Footerlinks":'+ JSON.stringify(Links()) +'}')

}

module.exports.footer = FooterContent();
