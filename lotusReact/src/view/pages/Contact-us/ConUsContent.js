import React from 'react';
import ReactDOM from 'react-dom';



class ConUsItem extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return(

          <div class="form-group">
              <label for={this.props.item.lableFor}>  <b> {this.props.item.title}</b></label>
              <input type={this.props.item.inputType} className="form-control" id={this.props.item.inputID} placeholder={this.props.item.placeHolder} name={this.props.item.id} required></input>
              <div class="valid-feedback">Valid.</div>
              <div class="invalid-feedback">Please fill out this field.</div>
          </div>


      );
   }
}

class ConUsForm extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const Formlist = this.props.data.map((jsonpart) =>(
        <ConUsItem item={jsonpart} />));

  return (
            <div>
               {Formlist}
            </div>

      );
  }
}

export default ConUsForm;
