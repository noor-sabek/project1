
const express = require('express');
const router = express.Router();
// const myjson=require('/');//להוסיף



router.get('/',function(req, res){
// res.json(myjson)
res.send('hello article')

})

module.exports=router;
