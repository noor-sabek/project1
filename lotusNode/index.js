const express = require('express');
const app = express();
const port = 8000;



const About = require('./Modules/pages/aboutUs/aboutUsController.js');//path to folder
const Contact = require('./Modules/pages/contactUs/contactUsController.js');
const Signup = require('./Modules/pages/signUp/signUpController.js');
const Articles = require('./Modules/pages/articles/articlesController.js');
const Login = require('./Modules/pages/Login/LogInController.js');
const Home = require('./Modules/pages/home/homeController.js');
const MyPassion = require('./Modules/pages/myPassion/myPassionController.js')
const QuizApp = require('./Modules/pages/QuizApp/QuizAppController.js');





app.get('/home',Home.homePage)

app.get('/QuizApp',QuizApp)

app.use('/Articles',Articles)

app.get('/About',About.aboutUsPage)

app.get('/Signup',Signup )

app.get('/ContactUS',Contact)

app.get('/myPassion',MyPassion)


app.get('/userLogin',Login)

app.listen(port, () => {
  console.log(` app listening on port ${port}!`)
});
