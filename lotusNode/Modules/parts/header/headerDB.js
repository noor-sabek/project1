const express = require('express')
const navjson = require('./navJson.json');

let navbar=()=>
{
 console.log("headerControllers")
  return (navjson)
}
module.exports.Header = navbar();
