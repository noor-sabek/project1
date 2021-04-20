
import React from 'react';
import ReactDOM from 'react-dom';



class ChildAge extends React.Component {

  render() {
    return (
      <>
      <p><a class="btn btn-primary dropdown-toggle border-0 mb-3" data-toggle="dropdown">Child's age</a>
                <div class=" form-group dropdown-menu mb-2">
                        <a class="dropdown-item" onClick="">0-6M</a>
                        <a class="dropdown-item" onClick="">6-12M</a>
                        <a class="dropdown-item" onClick="">1-2Y</a>
                        <a class="dropdown-item" onClick="">2-3Y</a>
               </div></p>

      </>

        );
    }
  }
export default ChildAge;
