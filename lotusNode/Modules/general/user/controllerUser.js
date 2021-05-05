
const express = require('express');
const router = express.Router();
const json = require('./userDB');


router.get('/',json.userPage)

module.exports = router;
