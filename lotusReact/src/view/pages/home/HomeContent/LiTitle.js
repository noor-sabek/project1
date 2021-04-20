import React from 'react';
import ReactDOM from 'react-dom';
import CatNavData from './CatNavData.js';






class LiTitle extends React.Component {
  constructor(props){
     super(props);
  }

  render() {
   return (

     <li className="nav-item">
       <a className="nav-link " data-toggle="tab" href={this.props.item.url}>{this.props.item.title}</a>
     </li>
   );
 }
}


export default LiTitle;
