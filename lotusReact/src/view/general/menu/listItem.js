import React from 'react';
import ReactDOM from 'react-dom';
import MenuItems from './menuItems.js';


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
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#">About children</a>
              <a className="dropdown-item" href="#">About parent</a>
              <a className="dropdown-item" href="#">Healthy food for children</a>
            </div>
        </li>
      )

    );

  }
}


export default ListItem;
