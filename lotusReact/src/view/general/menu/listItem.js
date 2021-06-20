import React from 'react';
import ReactDOM from 'react-dom';
import DropdownList from './dropdownList.js';
import './listItem.css'


class ListItem extends React.Component {
  constructor(props){
     super(props);
  }

  render() {
    console.log(this.props.item)

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
       <li className="nav-item dropdown dropbtn ">
            <a className="nav-link dropdown-toggle" id="navbardrop" data-toggle="dropdown" href={this.props.item.url}>
                 <i className={this.props.item.icon}></i> {this.props.item.title}
            </a>
            <div className="dropdown-menu dropdown-content ">

              <a class="dropdown-item " href={this.props.item.path.split(',')[0]}>{this.props.item.dropdownTitle.split(',')[0]}</a>
              <a class="dropdown-item " href={this.props.item.path.split(',')[1]}>{this.props.item.dropdownTitle.split(',')[1]}</a>
              <a class="dropdown-item " href={this.props.item.path.split(',')[2]}>{this.props.item.dropdownTitle.split(',')[2]}</a>

            </div>


        </li>

      )

    );



  }
}


export default ListItem;
