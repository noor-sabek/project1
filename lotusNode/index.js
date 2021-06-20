const express = require('express');
const app = express();
const port = 8000;
const bodyParser = require('body-parser');



const About = require('./Modules/pages/aboutUs/aboutUsController.js');//path to folder
const Contact = require('./Modules/pages/contactUs/contactUsController.js');
const Signup = require('./Modules/pages/signUp/signUpController.js');
const InsertSignup = require('./Modules/pages/InsertSignup/InsertSignupController.js');
const Articles = require('./Modules/pages/articles/articlesController.js');
const Login = require('./Modules/pages/Login/LogInController.js');
const Home = require('./Modules/pages/home/homeController.js');
const Gallery = require('./Modules/pages/Gallery/GalleryController.js')
const QuizApp = require('./Modules/pages/QuizApp/QuizAppController.js');


app.get('/home',Home.homePage)

app.get('/QuizApp',QuizApp.Quizpage)

app.use('/Articles',Articles)

app.get('/About',About.aboutUsPage)

app.get('/Signup',Signup.signup)

app.post('/InsertSignup', async (req,res)=>{
 name = req.body.name ,
 password = req.body.password ,
 confirmPass = req.body.confirmPass ,
 mail = req.body.mail
 res.json ( await InsertSignup.InsertSignup(name,password,confirmPass,mail))
 res.end()
})

app.get('/ContactUS',Contact.contactPage)

app.get('/Gallery',Gallery.Albumpage)

app.get('/userLogin',Login.loginPage)

app.listen(port, () => {
  console.log(` app listening on port ${port}!`)
});
