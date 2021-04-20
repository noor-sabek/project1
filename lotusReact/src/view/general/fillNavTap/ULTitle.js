import React from 'react';
import ReactDOM from 'react-dom';
import LiTitle from './LiTitle.js';


class ULTITLE extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const ULTITLE = this.props.myjson.map((jsonpart) =>(
        <LiTitle item={jsonpart} />));
  return (
           <ul className="nav nav-tabs col-12 Categories text-center" role="tablist">{ULTITLE}</ul>

      );
  }
}
 export default ULTITLE;
