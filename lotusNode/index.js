const express = require('express');
const app = express();
const port = 8000;


const About = require('./Modules/pages/aboutUs/aboutUsController.js');//path to folder
const Contact = require('./Modules/pages/contactUs/contactUs.js');//path to folder
const Signup = require('./Modules/pages/signUp/signUpController.js');//path to folder
const Articles = require('./Modules/pages/articles/articlesController.js');
const User = require('./Modules/general/user/controllerUser.js');
const Home =require('./Modules/pages/home/homeController.js');


app.get('/home',Home)

app.use('/Articles',Articles)

app.get('/About',About)

app.get('/Signup',Signup )

app.get('/user',User)

app.listen(port, () => {
  console.log(` app listening on port ${port}!`)
});

// app.use('/Contact',Contact)
