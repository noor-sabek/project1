const express = require('express');
const app = express();


let mysql = require('mysql');
let config = require('../../../config/config.json')
let con=""


module.exports.test = (err,req,res) => {

    con = mysql.createConnection({
     host: "localhost",
     user: "myusername",
     password: "mypassword",
     database: "mydb"
   })
  con.connect(function(err) {
    // if (err) throw err;
    console.log("Connected!")
  })
  con.query("CREATE DATABASE mydb", function (err, result) {
    // if (err) throw err;
    console.log("Database created");
  })



}
