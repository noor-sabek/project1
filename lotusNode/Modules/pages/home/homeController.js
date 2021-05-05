const express = require('express')
const router = express.Router();
const header = require('../../parts/header/headerController.js');

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
  return JSON.parse('{ "Content" :' +JSON.stringify(HomeContent())+',"header" :'+ JSON.stringify(header.Header())+'}')

}

module.exports.homepage = (req, res)=>{
  console.log("homepage")
  res.json(HomepageJson())
}
