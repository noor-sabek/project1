
const express = require('express');
const FORM = require('./signUpDB');


let signup=()=>{
  console.log("signup controller")
   return(FORM.signup)
}

 module.exports= (req,res) => {res.json(signup())}
