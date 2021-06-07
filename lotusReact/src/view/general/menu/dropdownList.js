import React from 'react';
import ReactDOM from 'react-dom';



class DropdownList extends React.Component {
      constructor(props){
      super(props);

  }
  render() {

    const Dropdown = this.props.item.map((jsonpart)=>(
        <DropdownItems dropdownitem={jsonpart} />));
  return (
           <div className="dropdown-menu">{Dropdown} </div>
      );
  }
}



class DropdownItems extends React.Component{
  constructor(props){
  super(props);

  }
  render() {
    if (this.props.dropdownitem.length===0)
       return ("opppp home.js")


      return(
      <a class="dropdown-item" href={this.props.dropdownitem.path}>{this.props.dropdownitem.dropdownTitle}</a>
      );

  }

}

 export default DropdownList;
