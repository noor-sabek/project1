import React from 'react';
import ReactDOM from 'react-dom';
import CatNavData from './CatNavData.js';



class ULsubTITLE extends React.Component {

  render() {
    const ULsubTITLE = CatNavData.map((jsonpart) =>(
        <LiTitle item={jsonpart} />));
  return (
           <ul className="nav nav-tabs col-12 Categories text-center" role="tablist">{ULTITLE}</ul>

      );
  }
}

export default ULsubTITLE;
