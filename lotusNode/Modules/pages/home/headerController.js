const express = require('express')
const router = express.Router();
const concat=require('async/concat');
const navjson = require('./jsonforHome/navItems.json');


 module.exports.Header = (req , res) => {
   console.log("headerControllers")
    return (navjson)
 }
