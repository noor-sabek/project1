import React from 'react';
import ReactDOM from 'react-dom';
import Form from '../form/form.js'



class LogInForm extends React.Component {
  constructor(props){
    super(props);
  }

  handleSubmit=() =>
   {
    console.log("ok");

   }
  render() {

    return (

      			<div>
                <Form data = {this.props.data}/>

                 <p className="et_pb_forgot_password"><a href="#">Forgot your password?</a></p>
                

      			</div>


    );
  }
}
export default LogInForm;
