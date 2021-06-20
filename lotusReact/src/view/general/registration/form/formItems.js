import React from 'react';
import ReactDOM from 'react-dom';



class FormItem extends React.Component{
  constructor(props) {
    super(props);
    this.state={
        userName:"",
        email:"",
        password:"",
        Vpassword:"",
        phNum:"",
        Address:""

    }
  }

   handleChange = event =>{
     // console.log(event.target.value)
     this.setState({[event.target.name]:event.target.value})
    console.log(this.state.Address)
    console.log(this.state)
   }



 render() {
   const {userName=this.props.item.inputID
     , password
     ,valuePassword, email,phNum,Address}=this.state

     return(

            <div class="form-group">
                  <label for={this.props.item.lableFor}><i className= {this.props.item.icon}></i><b> {this.props.item.title}</b></label>
                  <input type={this.props.item.inputType}
                        className="form-control w3-serif "
                         id={this.props.item.inputID}

                        placeholder={this.props.item.placeHolder}
                         name={this.props.item.inputID}
                        onChange={this.handleChange}
                        required></input>
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

    handleSubmit=() =>{
      console.log("ok")

    }

    render() {
       console.log(this.props.data[0].url)

    const Formlist = this.props.data.map((jsonpart) =>(
          <FormItem item={jsonpart} />));
    return (
      <form action ={this.props.data[0].url}  className=" mx-auto col-lg-6 "   method="POST"   onSubmit={this.handleSubmit} required>

            {Formlist}
    </form>

        );
    }
  }


export default Formlist
