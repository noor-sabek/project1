
const express = require('express');
const Form = require('./signUpDB');



 module.exports.signup = async (req,res) =>
  {
   console.log( await Form.signup())
    res.json( await Form.signup())
  }
