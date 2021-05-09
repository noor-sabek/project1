import React from 'react';
import ReactDOM from 'react-dom';


class Subscribe extends React.Component{
    constructor(){
      super();
      }
    render(){

        return(
        <form class=" form-control subscribe" novalidate="novalidate" action="#" method="post" id="newsletter-validate-detail">
          <label class=" label mr-5 text-danger " for="newsletter"><span>Sign Up:</span></label>
          <input  name="email" type="email" id="newsletter" placeholder="Enter your email address" data-validate="{required:true, 'validate-email':true}"></input>
          <button type="submit" class="btn btn-default text-danger float-right">Submit</button>
        </form>);
      }
    }
export default Subscribe;
