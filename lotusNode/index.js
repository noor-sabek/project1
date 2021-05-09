const express = require('express');
const app = express();
const port = 8000;


const About = require('./Modules/pages/aboutUs/aboutUsController.js');//path to folder
const Contact = require('./Modules/pages/contactUs/contactUsController.js');
const Signup = require('./Modules/pages/signUp/signUpController.js');
const Articles = require('./Modules/pages/articles/articlesController.js');
const User = require('./Modules/general/user/controllerUser.js');
const Home = require('./Modules/pages/home/homeController.js');
const MyPassion = require('./Modules/pages/myPassion/myPassionController.js')

app.get('/home',Home)

app.use('/Articles',Articles)

app.get('/About',About)

app.get('/Signup',Signup )

app.get('/ContactUS',Contact)

app.get('/myPassion',MyPassion)

app.get('/user',User)

app.listen(port, () => {
  console.log(` app listening on port ${port}!`)
});
