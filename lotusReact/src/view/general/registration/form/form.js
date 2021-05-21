import React from 'react';
import ReactDOM from 'react-dom';
import FormItems from './formItems';
import './form.css';


class Form extends React.Component {
constructor(props) {
  super(props);
  }
  render() {
    return (

      				<div className="et_pb_newsletter_form et_pb_login_form  mt-5">
      					 <FormItems data={this.props.data}/>
      				</div>


    );
  }
}
export default Form;
