
const express = require('express');
const Form = require('./signUpDB');
const bodyParser = require('body-parser');


 module.exports.signup = async (req,res) =>
  {
   console.log( await Form.signup())
    res.json( await Form.signup())
  }
