import React from 'react';
import ReactDOM from 'react-dom';
import MenuItems from './menuItems.js';
import DropdownList from './dropdownList.js';

class ListItem extends React.Component {
  constructor(props){
     super(props);
  }

  render() {

   return (

  (this.props.item.level == 1 )?

      (<li className="nav-item">
           <a className="nav-link " href={this.props.item.url}>
               <i className={this.props.item.icon}></i>  {this.props.item.title}
           </a>

       </li>
     ):
     (
        // התנאי ל 2
       <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" id="navbardrop" data-toggle="dropdown" href={this.props.item.url}>
                 <i className={this.props.item.icon}></i> {this.props.item.title}
            </a>


            <DropdownList item = {this.props.item.Dropdown}/>


        </li>
      )

    );



  }
}


export default ListItem;
