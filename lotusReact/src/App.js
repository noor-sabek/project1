import React ,{Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';

import Home from './view/pages/home/home.js';
import QuizApp from './view/pages/quizApp/quizApp.js';
import MyPassion from './view/pages/My-Passion/MyPassion.js';
import ContactUs from './view/pages/Contact-us/contact-us.js';
import SignUp from './view/pages/Sign-up/Sign-up.js';
import AboutUs from './view/pages/about-us/about-us.js';
import UserLogin from './view/pages/Account/UserPro.js';
// import Error from './view/pages/Error/error.js';


class App extends React.Component {
  render() {
    return (
        <main className="App" >
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/QuizApp" component={QuizApp}  />
                <Route path="/Sign-up" component={SignUp}  />
                <Route path="/My-Passion" component={MyPassion}  />
                <Route path="/Contact-Us" component={ContactUs}  />
                <Route path="/About-Us" component={AboutUs}  />
                <Route path="/userLogin" component={UserLogin}  />
            </Switch>

          </main>
       );
  }
}

export default App;
