import React from 'react';
import ReactDOM from 'react-dom';



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
            <div/>

      );
  }
}

class ConUsItem extends React.Component {
  render() {
    return(

          <div class="form-group">
              <label for={this.props.item.id}>  <b> {this.props.item.title}</b></label>
              <input type={this.props.item.type} className="form-control" id={this.props.item.id} placeholder={this.props.item.placeholder} name={this.props.item.id} required></input>
              <div class="valid-feedback">Valid.</div>
              <div class="invalid-feedback">Please fill out this field.</div>
          </div>


      );
   }
}
export default ConUsForm;
