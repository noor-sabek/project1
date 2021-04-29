
const express = require('express');
const router = express.Router();
const myjson=require('./menuItems.json');



router.get('/',function(req, res){
res.json(myjson)
console.log(myjson);
})

module.exports=router;
