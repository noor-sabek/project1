const express = require('express');
const headerJson=require('../../parts/header/headerController');
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
  let UserPage=()=>{
    console.log("User header")
    const Json={
      "header":headerJson.Header(),
      "content":UserContent(),
      "footer":"footer"
    }
    return Json
  }
module.exports.AdminResponse=UserPage();
