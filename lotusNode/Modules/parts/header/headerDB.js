const express = require('express')
const navjson = require('./navJson.json');
const GeneralDb = require('../../general/DB/GeneralDb');

//
//
// let Dropdown=async ()=>{
//   return await GeneralDb.query()
// }

let MenuItems =async () => {
  return  await GeneralDb.query("SELECT * FROM `menuitems` WHERE  MENUID = 1");
  }

module.exports.Header=async () => {
    return JSON.parse('{"MenuItems":'+JSON.stringify(await MenuItems())+"}")
}
