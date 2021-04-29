
const express = require('express');
const router = express.Router();


// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})

// define the logIn page route
router.get('/',function(req, res){
res.send('Hello log in')

})

module.exports=router;
