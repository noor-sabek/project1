import React from 'react';
import ReactDOM from 'react-dom';

import ListItems from './../../general/menu/listItems.js';
import RightNav from './RightNavbar/RightNav.js';
import LogoPic from './../../general/logo/logo.js';
import './navBar.css' ;

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.data.Dropdown)
   return (

        <nav className="navbar navbar-expand-lg bg-dark navbar-dark fixed-top ">

            <LogoPic/>

              <button className="navbar-toggler navbar-toggler-right" onClick=""  type="button" data-toggle="collapse" data-target="#collapsibleNavbar" aria-controls="collapsibleNavbar" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

            <div className="collapse navbar-collapse" id="collapsibleNavbar">
              <ListItems data={this.props.data}/>
            </div>

             <RightNav data={this.props.data}/>

       </nav>

      );
  }
}


export default NavBar;
