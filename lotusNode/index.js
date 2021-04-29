const express = require('express');
const app = express();
const port = 8000;


// const Home = require('./Modules/general/fillList/fillListController.js');
const About = require('./Modules/pages/aboutUs/aboutUsController.js');//path to folder
const Contact = require('./Modules/pages/contactUs/contactUs.js');//path to folder
const Signup = require('./Modules/pages/signUp/signUpController.js');//path to folder
const Articles = require('./Modules/pages/articles/articlesHome.js');
const Login = require('./Modules/general/registeration/logIn/logInController.js');
const myjson=require('./Modules/general/fillList/menuItems.json');

app.get('/',function(req, res){
res.json(myjson)
})

app.use('/Articles',Articles)

app.use('/About',About)

// app.use('/Contact',Contact)

app.use('/Signup',Signup )

app.use('/auth',Login )


app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});
