
const express = require('express');
const router = express.Router();
const myjson=require('./aboutUs.json');



router.get('/',function(req, res){
res.json(myjson)

})

module.exports=router;
