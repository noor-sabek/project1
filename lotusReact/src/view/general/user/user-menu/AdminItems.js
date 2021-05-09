import React from 'react';
import ReactDOM from 'react-dom';
import json from './EditJson.js';
import AdminMenu from './adminMenu.js';



class AdminItems extends React.Component {

  render() {
    const adminMenu = json.map((jsonpart) =>(
        <AdminMenu item={jsonpart} />));
  return (
          <div className="btn-group open">
            <a className="btn btn-success" href="#"> User</a>
            <a className="btn btn-success dropdown-toggle" data-toggle="dropdown" href="#">
              <span title="Toggle dropdown menu"></span> </a>

               <ul className="dropdown-menu">{adminMenu}</ul>

           </div>
      );
  }
}


export default AdminItems;
