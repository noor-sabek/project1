const express = require('express')
const navjson = require('./navJson.json');
const GeneralDb = require('../../general/DB/GeneralDb');


let Dropdown=async ()=>{
  return await GeneralDb.query("SELECT * FROM `menulist` INNER JOIN `menuitems`ON menulist.id = menuitems.menuID WHERE name='dropdownItems'")
}


let RightNavbar=async ()=>{
  return await GeneralDb.query("SELECT * FROM `menulist` INNER JOIN `menuitems`ON menulist.id = menuitems.menuID WHERE name='Right-menu'")
}


let LeftNavbar =async () => {
  return  await GeneralDb.query("SELECT * FROM `menulist` INNER JOIN `menuitems`ON menulist.id = menuitems.menuID WHERE name='navbar'");
  }
  //
  // let MenuItems = async()=>{
  //   return await  JSON.parse('{"LeftNavbar":'+JSON.stringify(await MenuItems())+',"Dropdown" :'+ JSON.stringify(Dropdown())+',"RightNavbar" :'+ JSON.stringify(RightNav())+"}")
  // }

module.exports.Header=async () => {
    return JSON.parse('{"LeftNavbar":'+JSON.stringify(await LeftNavbar())+',"Dropdown" :'+ JSON.stringify(Dropdown())+',"RightNavbar" :'+ JSON.stringify(RightNavbar())+"}")
}
