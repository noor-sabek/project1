import React from 'react';
import ReactDOM from 'react-dom';



class TabContent extends React.Component {
  constructor(props){
     super(props);
  }

  render() {
   return (

     <div id={this.props.item.id} className="col-12 tab-pane fade mt-5">
         <div className="row">
               <div className=" d-block col-12 col-lg-6  ">
                  <img className="picOfToy" src={this.props.item.picture} ></img>
               </div>
               <div className="   lead d-block col-12 col-md-6 bg-gray text-left text-break ">
                    <p ><b><code className="font-italic">for {this.props.item.title} months old </code></b><br></br>
                         {this.props.item.information}
                    </p>
               </div>
         </div>
     </div>
   );
 }
}


export default TabContent;
