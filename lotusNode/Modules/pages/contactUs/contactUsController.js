
const express = require('express');
const Json = require('./contactUsDB');




    module.exports.contactPage= async (req,res) =>
    {
        console.log( "contact controller")
      res.json( await Json.contactpageJ())
    }
