const express = require('express');
const router = express.Router();
const headerJson=require('../../parts/header/headerController');
const footerJson = require('../../parts/footer/footerController.js');
const GeneralDb = require('../../general/DB/GeneralDb');

//
// const  catNavData= require('./jsonforHome/CatNavData.json');
// const  homeCarouselJson= require('./jsonforHome/homecarousel.json');
// const  feedbackCards= require('./jsonforHome/feedbackCards.json');

let Carousel = async()=> {
  console.log("carousel")
  return await  GeneralDb.query("SELECT * FROM `carousel-items` WHERE `carousel-id` = 'home-page' ")
  // return(homeCarouselJson)
}


let Modal = async()=> {
  console.log("modal")
  return await  GeneralDb.query("SELECT * FROM `add-knowledge` ")
  // return(homeCarouselJson)
}

let CatNavData = async ()=> {
console.log("CatNavData")
  return  await GeneralDb.query("SELECT * FROM `toysoptions`")
  //
  // return(catNavData)
}

let Feedback = async ()=> {
console.log("Feedback")
    return await GeneralDb.query("SELECT * FROM `cardsitems` WHERE `card-for` ='feedback-home-Page'")
  // return(feedbackCards)
}


//add content json
let Content = async () => {
console.log( await Modal())
  return JSON.parse('{ "Carousel":'+JSON.stringify( await Carousel())
  +',"CatNavData":'+ JSON.stringify( await CatNavData())+',"Modal":'+ JSON.stringify( await Modal())+',"Feedback":'+JSON.stringify(await  Feedback())+'}')

}
//add all json for home
module.exports.homepageJ = async ()=>{
  return JSON.parse('{ "headerItems" :'+ JSON.stringify(await headerJson.headerItems())+',"Content" :' +JSON.stringify( await Content())+',"footerItems":'+JSON.stringify( await footerJson.footerItems()) +'}')

}
