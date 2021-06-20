const express = require('express')
// const navjson = require('./navJson.json');
const GeneralDb = require('../../general/DB/GeneralDb');



let RightNavbar=async ()=>{
  return await GeneralDb.query("SELECT * FROM `menulist` INNER JOIN `menuitems`ON menulist.id = menuitems.menuID WHERE name='Right-menu'")
}


let LeftNavbar =async () => {
  return  await GeneralDb.query("SELECT * FROM `menulist` INNER JOIN `menuitems`ON menulist.id = menuitems.menuID WHERE name='navbar'");
  }


module.exports.Header= async () => {
    return JSON.parse('{"LeftNavbar":'+JSON.stringify(await LeftNavbar())+','+"RightNavbar" :'+ JSON.stringify( await RightNavbar())+"}")
}
