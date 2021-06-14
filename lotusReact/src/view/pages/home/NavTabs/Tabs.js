import React from 'react';
import  TitleHeading from './TitleHeading.js';
import TabParts from './TabParts.js';



class Tabs extends React.Component{
  constructor(props){
    super(props);
  }
render() {
         const TabsInfo = this.props.item.map((jsonpart) =>(
              <TabParts item={jsonpart} />));

     return(
               <div className="tab-content "> {TabsInfo} </div>
     );
   }
}

export default Tabs;
