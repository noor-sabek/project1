import React from 'react';
import ReactDOM from 'react-dom';
import './signUp.css'



class  SignUpOptions extends React.Component{

render(){
  return(
            <div class="block-item right">
              <h1 className="with pt-4 w3-serif ">Sign up with:</h1>
              <button className="btnW facebook" data-provider="facebook"><i class="fa fa-facebook-official"></i><span>Facebook</span></button>
              <button className="btnW twitter" data-provider="twitter"><i class="fa fa-twitter-square"></i><span>Twitter</span></button>
              <button className="btnW google" data-provider="google" ><i class="fa fa-google-plus-official" ></i> <span>Google</span></button>
            </div>
    );
  }
}

export default SignUpOptions ;
