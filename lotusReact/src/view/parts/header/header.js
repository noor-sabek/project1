import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './navBar.js';




class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
         <Navbar data={this.props.data}/>
      );
  }
}
export default Header;
