import React from 'react';
import ReactDOM from 'react-dom';
// import CatNavData from './CatNavData.js';



class ULsubTITLE extends React.Component {
  constructor() {
     super();
     this.state = { data: [] };
   }

   componentDidMount() {
     fetch(`./catNavData`)
       .then(res => res.json())
       .then(json => this.setState({ data: json }));
   }
  render() {
    const ULsubTITLE = this.state.data.map((jsonpart) =>(
        <LiTitle item={jsonpart} />));
  return (
           <ul className="nav nav-tabs col-12 Categories text-center" role="tablist">{ULTITLE}</ul>

      );
  }
}

export default ULsubTITLE;
