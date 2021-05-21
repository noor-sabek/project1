const express = require('express');
const headerJson=require('../../parts/header/headerController');
const footerJson = require('../../parts/footer/footerController.js');
const users=require('./users');


let GetAllUser=()=>{
  return  (
    users
  )
}

let AddUser =()=> {
    return (
    { "message":'add User'}
   )
 }

 //id for article to know witch one we want to update    // const articleId = req.params.articleId /- ${articleId}`;
 let EditUser =(req) =>{
    return (
      { "message": "Edit User" })
  }

  let DeleteUser =(req)=>{
        return ( {"message": "delete User"})
      }


  let UserContent=()=>{
    console.log("User db");
    return JSON.parse('{ "getAllUser":'+JSON.stringify(GetAllUser())
    +',"AddUser":'+ JSON.stringify(AddUser())+',"EditUser":'+JSON.stringify(EditUser())+',"deleteUser":'+JSON.stringify(DeleteUser())+'}')
}
    let LoginJson=()=>{
      console.log(" contact json in db")
      return JSON.parse('{ "header" :'+ JSON.stringify(headerJson.Header())+',"Content" :' +JSON.stringify(UserContent())+',"Footer":'+JSON.stringify(footerJson.Footer()) +'}')

  }

module.exports.AdminResponse = LoginJson();
