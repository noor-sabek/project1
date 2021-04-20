import React from 'react';
import ReactDOM from 'react-dom';

import LiTitle from '../../../general/fillNavTap/LiTitle.js';
import ULTITLE from'../../../general/fillNavTap/ULTitle.js';
import FillTabContent from '../HomeContent/fillTabContent.js';
import TabContent from '../HomeContent/tabContent.js';
import CatNavData from '../HomeContent/CatNavData.js';


class TabParts extends React.Component {
  constructor(props){
     super(props);
  }

  render() {
  return (
         <div className={this.props.item}> {this.props.item}</div>
        );
     }
  }
  export default TabParts;
