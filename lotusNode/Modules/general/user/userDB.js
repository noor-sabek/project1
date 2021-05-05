const express = require('express');
const router = express.Router();
const header=require('../../parts/header/headerController');


module.exports.userPage = (req , res) => {
  res.json( {
    "header":headerJson.Header(),
    "signUp":"signUp",
    "logIn": "logIn"
  } )
}
