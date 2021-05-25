import React from 'react';
import ReactDOM from 'react-dom';


class Subscribe extends React.Component{
    constructor(){
      super();
      }
    render(){

        return(
        <form className=" form-control subscribe" novalidate="novalidate" action="#" method="post" id="subscribe">
          <label className="  mr-5 text-danger " for="subscribe"><span>subscribe</span></label>
          <input  name="email" type="email" id="subscribe" placeholder="Enter your email address" required></input>
          <button type="submit" className="btn btn-default text-danger float-right">Submit</button>
        </form>
      );
      }
    }
export default Subscribe;
