
const express = require('express');
const router = express.Router();
const navBarItems=require('./menuItems.json');



router.get('/',function(req, res){
res.json(navBarItems)
console.log(navBarItems);
})

module.exports=router;
