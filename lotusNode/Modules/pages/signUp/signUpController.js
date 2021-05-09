
const express = require('express');
const users = require('./signUpDB');


let signup=()=>{
  console.log("signup controller")
   return(users.signup)
}

 module.exports= (req,res) => {res.json(signup())}
