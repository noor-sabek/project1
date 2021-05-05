const express = require('express')
const router = express.Router();
const concat=require('async/concat');
const navjson = require('./navJson.json');


 module.exports.Header = (req , res) => {
   console.log("headerControllers")
    return (navjson)
 }
