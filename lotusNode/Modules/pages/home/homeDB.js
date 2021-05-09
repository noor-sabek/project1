const express = require('express');
const router = express.Router();
const headerJson=require('../../parts/header/headerController');
const footerJson = require('../../parts/footer/footerController.js');



const  catNavData= require('./jsonforHome/CatNavData.json');
const  homeCarouselJson= require('./jsonforHome/homecarousel.json');
const  feedbackCards= require('./jsonforHome/feedbackCards.json');

let Carousel =()=> {
  return(homeCarouselJson)
}


let CatNavData =()=> {
  return(catNavData)
}

let Feedback =()=> {
  return(feedbackCards)
}


//add content json
let HomeContent=()=>{
  return JSON.parse('{ "homeCarouselJson":'+JSON.stringify(Carousel())
  +',"CatNavData":'+ JSON.stringify(CatNavData())+',"feedbackCards":'+JSON.stringify(Feedback())+'}')

}
//add all json for home
let HomepageJson=()=>{
  console.log("homepagejson in controller")
  return JSON.parse('{ "header" :'+ JSON.stringify(headerJson.Header())+',"Content" :' +JSON.stringify(HomeContent())+',"Footer":'+JSON.stringify(footerJson.Footer()) +'}')

}

console.log("homeDB")


module.exports.homepageJ = HomepageJson();
