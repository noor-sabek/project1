import React from 'react';
import ReactDOM from 'react-dom';
import './form.css';


class Form extends React.Component {
  render() {
    return (

      				<div className="et_pb_newsletter_form et_pb_login_form  mt-5">
      					<form action="#" className=" mx-auto col-6">
                  <div className="form-group">
                     <label for="pwd">  &#x1F4E7;<b> Your Email:</b></label>
                     <input type="email" className="form-control" id="email" placeholder="Name@example.com" name="email" required></input>
                     <div className="valid-feedback">Valid.</div>
                     <div className="invalid-feedback">Please fill out this field.</div>
                  </div> 
                   <div className="form-group">
                        <label for="pwd">  &#x1F4E7;<b> Your password:</b></label>
                        <input type="password" className="form-control" id="password" placeholder="password" name="password" required></input>
                        <div className="valid-feedback">Valid.</div>
                        <div className="invalid-feedback">Please fill out this field.</div>
                  </div>
      						<p className="et_pb_forgot_password"><a href="#">Forgot your password?</a></p>
      						 <p>
      						   <button className="btn btn-success" type="submit">Login</button>
      						</p>
      					</form>

      				</div>

    );
  }
}
export default Form;
