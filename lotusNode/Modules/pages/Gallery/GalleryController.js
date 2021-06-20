const express = require('express');
const JsonDB = require('./GalleryDB');



   //
   // let AlbumpageJ = async()=>
   // {
   //   console.log("passion page controller")
   // return ( await JsonDB.AlbumpageJ())
   // }
   //
   //
   //  module.exports= async (req,res) => {res.json(AlbumpageJ())}

        module.exports.Albumpage= async (req,res) =>
        {
            console.log( "GalleryController ")
          res.json( await JsonDB.AlbumpageJ())
        }
