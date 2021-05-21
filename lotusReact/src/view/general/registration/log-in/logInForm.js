import React from 'react';
import ReactDOM from 'react-dom';
import LogInForm from './LOGINJS';
import Form from '../form/form.js'
import './form.css';


class LogInForm extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (

      			<div>
                <Form data = {this.props.data}/>

                 <p className="et_pb_forgot_password"><a href="#">Forgot your password?</a></p>
                 <p>
                   <button className="btn btn-success" type="submit">Login</button>
                </p>

      			</div>


    );
  }
}
export default LogInForm;
