
const express = require('express');
const Form = require('./InsertSignupDB');
const bodyParser = require('body-parser');

 module.exports.InsertSignup = async (name,password,confirmPass,mail) =>{
   console.log(name)

    return( await Form.InsertSignup(name,password,confirmPass,mail))
  }
