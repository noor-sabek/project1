const express = require('express');
const router = express.Router();
const {signUp,logIn} = require('./controllerUser');

//get/post/delete/update

router.get('/',function(req, res){
  res.send('hello user & Welcome')
})

router.get('/signUp', signUp);


router.get('/logIn',logIn);

module.exports = router;
