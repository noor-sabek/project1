import React from 'react';
import ReactDOM from 'react-dom';
import FormItems from './formItems';
import './form.css';


class Form extends React.Component {
constructor(props) {
  super(props);
  }
  render() {
    console.log(this.props.data)
    return (

      					 <FormItems data={this.props.data}/>
      		
    );
  }
}
export default Form;
