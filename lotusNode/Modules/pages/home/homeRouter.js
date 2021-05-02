
const express = require('express');
const router = express.Router();
const {navbar,carousel,catNavData} =require('./homeController.js')

router.get('/',function(req, res){
  res.send('hello & Welcome in home page');
})

router.get('/carousel',carousel);

router.get('/navbar',navbar);

router.get('/catNavData',catNavData);


module.exports=router;
