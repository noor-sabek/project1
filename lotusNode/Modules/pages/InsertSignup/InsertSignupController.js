
const express = require('express');
const Form = require('./InsertSignupDB');
const bodyParser = require('body-parser');

 module.exports.InsertSignup = (req,res) =>{
   console.log(req.body)
    return ("kjkk" )
    // return( await Form.InsertSignup(req.body.name,req.body.password,req.body.confirmPass,req.body.mail))
  }
