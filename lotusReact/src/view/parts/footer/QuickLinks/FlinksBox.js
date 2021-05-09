import React from 'react';
import ReactDOM from 'react-dom';
import linksItems from './linksItems.js';


class BuildList extends React.Component{
    constructor(props){
      super(props);
      }
    render(){
         const listItems = this.props.item.Footerlinks.map((jsonpart) =>( <FooterLink item={jsonpart} />));

        return(<ul> {listItems}</ul>);
      }
    }




class FooterLink extends React.Component{
    constructor(props){
      super(props);
    }

    render(){
       return(
               <li className="list-unstyled">
               <a href={this.props.item.path}> <i className={this.props.item.icon}></i>{this.props.item.title}</a>
             </li>
          );
     }
}

export default BuildList;
