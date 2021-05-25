import React from 'react';
import ReactDOM from 'react-dom';
import Signupjson from './../sign-up/signupJson'


class FormItem extends React.Component{
  constructor(props) {
    super(props);
   }
   render(){
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



  class Formlist extends React.Component {
    constructor(props){
      super(props);
    }

    render() {

      const Formlist = this.props.data.map((jsonpart) =>(
          <FormItem item={jsonpart} />));
    return (
              <form action="/action_page.php " className=" mx-auto col-6"  method="post" id="">
                 {Formlist}
              </form>

        );
    }
  }


export default Formlist
