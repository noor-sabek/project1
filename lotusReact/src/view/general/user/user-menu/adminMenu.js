import React from 'react';
import ReactDOM from 'react-dom';


class AdminMenu extends React.Component {
constructor(props) {
  super(props);
}
  render() {

    return (

        <li>
          <a href={this.props.item.path} >
            <i className={this.props.item.icon}></i> {this.props.item.title}
          </a>
        </li>

    )
  }
  }
  export default AdminMenu;
