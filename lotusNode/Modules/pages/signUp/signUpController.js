
const express = require('express');
const router = express.Router();
const Form = require('./signUpDB');
const bodyParser = require('body-parser');


router.use(bodyParser.json());
// router.use(bodyParser.urlencoded());


 module.exports.signup = async (req,res) =>
  {
   console.log( await Form.signup())
    res.json( await Form.signup())
  }


module.exports.insert = async (req,res)=>
   {
     console.log(req.body);
    res.send(await  formInfo(req.body));
}

let formInfo = async (info)=>{
 let reginfo = await Form.insertdata(info);

}
