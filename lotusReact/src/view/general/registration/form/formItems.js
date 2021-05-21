import React from 'react';
import ReactDOM from 'react-dom';
// import Signupjson from '../formJson'


class Formlist extends React.Component {
  constructor(props){
    super(props);
  }

  render() {

    const Formlist = this.props.data.map((jsonpart) =>(
        <FormItem item={jsonpart} />));
  return (
            <form action="#" className=" mx-auto col-6">
               {Formlist}
            <form/>

      );
  }
}

class FormItem extends React.Component {
  render() {
    return(

          <div class="form-group">
              <label for={this.props.item.lableFor}><i className= {this.props.item.icon}></i><b> {this.props.item.title}</b></label>
              <input type={this.props.item.inputType} className="form-control" id={this.props.item.inputID} placeholder={this.props.item.placeHolder} name={this.props.item.id} required></input>
              <div class="valid-feedback">Valid.</div>
              <div class="invalid-feedback">Please fill out this field.</div>
          </div>


      );
   }
}
export default Formlist;
