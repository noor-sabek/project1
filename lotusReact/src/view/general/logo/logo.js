import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './../../parts/header/navBar.js';
import './logo.css';
import logo from '../../../Cssimg/LOGO-RAINBOW.png';


class LogoPic extends React.Component {
  render() {
    return (
      <div>
              <a className="navbar-brand " href="/">
                <img className=" logo rounded" src={logo}></img>
              </a>

      </div>


    );
  }
}
export default LogoPic;
