import React from 'react';
import ReactDOM from 'react-dom';
// import MenuItems from './menuItems.js';
import ListItem from './listItem.js';


class ListItems extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const ListItems = this.props.data.map((jsonpart) =>(
        <ListItem item={jsonpart} />));
  return (
           <ul className="  navbar-nav  col-lg-10 col-md-7  bg-dark text-center">{ListItems}</ul>
      );
  }
}


export default ListItems;
