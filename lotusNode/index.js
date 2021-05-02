const express = require('express');
const app = express();
const port = 8000;


const About = require('./Modules/pages/aboutUs/aboutUsController.js');//path to folder
const Contact = require('./Modules/pages/contactUs/contactUs.js');//path to folder
const Signup = require('./Modules/pages/signUp/signUpController.js');//path to folder
const Articles = require('./Modules/pages/articles/articlesRouter.js');
const User = require('./Modules/general/user/userRouter.js');
const Home =require('./Modules/pages/home/homeRouter.js');


app.use('/',Home)

app.use('/Articles',Articles)

app.use('/About',About)

app.use('/Signup',Signup )

app.use('/user',User)

app.listen(port, () => {
  console.log(` app listening on port ${port}!`)
});

// app.use('/Contact',Contact)
