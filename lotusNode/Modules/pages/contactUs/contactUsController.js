
const express = require('express');
const Json = require('./contactUsDB');




   let contactUSpage = ()=>
   {
     console.log(Json.contactpageJ)
   return (Json.contactpageJ)
   }


    module.exports= (req,res) => {res.json(contactUSpage())}
