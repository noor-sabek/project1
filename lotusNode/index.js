const express = require('express');
const app = express();
const port = 8000;

const test = require('./Modules/general/DB/db.js')

const About = require('./Modules/pages/aboutUs/aboutUsController.js');//path to folder
const Contact = require('./Modules/pages/contactUs/contactUsController.js');
const Signup = require('./Modules/pages/signUp/signUpController.js');
const Articles = require('./Modules/pages/articles/articlesController.js');
const User = require('./Modules/general/user/controllerUser.js');
const Home = require('./Modules/pages/home/homeController.js');
const MyPassion = require('./Modules/pages/myPassion/myPassionController.js')
const QuizApp = require('./Modules/pages/QuizApp/QuizAppController.js');



app.get('/test',test.test)

app.get('/home',Home)

app.get('/QuizApp',QuizApp)

app.use('/Articles',Articles)

app.get('/About',About)

app.get('/Signup',Signup )

app.get('/ContactUS',Contact)

app.get('/myPassion',MyPassion)

app.get('/user',User)

app.listen(port, () => {
  console.log(` app listening on port ${port}!`)
});
