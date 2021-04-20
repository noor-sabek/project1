import React from 'react';
import ReactDOM from 'react-dom';
import DropdownItems from './dropdownItems';
import ListItem from './listItem.js';



class DropdownList extends React.Component {

  render() {
    const DropdownList = DropdownItems.map((jsonpart) =>(
        <ListItem dropdownitem={jsonpart} />));
  return (
           <a>{DropdownList}</a>
      );
  }
}

export default DropdownList;
