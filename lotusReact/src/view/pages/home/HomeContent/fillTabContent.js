import React from 'react';
import ReactDOM from 'react-dom';
import TabContent from './tabContent.js';



class FillTabContent extends React.Component{
  constructor(props){
    super(props);
   }
      render(){
        const JsonContent = this.props.myjson.map((jsonpart) =>(
            <TabContent item={jsonpart}/>));
            return (
               <div className="tab-content ">{JsonContent}</div>
          );
  }
}
export default FillTabContent;
