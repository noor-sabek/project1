
const express = require('express');
const router = express.Router();
const aboutUsJson=require("./aboutUsDB")


router.get('/About',aboutUsJson.aboutUsPage)


module.exports = router
