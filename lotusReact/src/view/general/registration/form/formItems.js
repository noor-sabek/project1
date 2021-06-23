import React , {useState} from 'react';
import ReactDOM from 'react-dom';



class FormItem extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
               name:" ",
               email: " ",
               password:" ",
               Vpassword:" ",
          };

  }
loginUser = async (values )=>{
      return ((await fetch('./InsertSignup',{
       headers:{'Content-Type': 'application/json'},
       method: 'POST',
       body: {  name:this.state.name,
                 email:this.state.email,
                 password:this.state.password,
                 Vpassword:this.state.Vpassword
              }
        })).json());}

handleChange = (e) => {
  if ( e.target.value==="name")
      this.setState({ [e.target.name]: e.target.value })
      else if(e.target.value==="email")
      this.setState({ [e.target.email]: e.target.value })
console.log(e.target.value)
 // console.log(this.state);
}
handleSubmit=(e)=>{
     e.preventDefault();
     console.log("submit");

   }
 render() {
   console.log(this.state)
     return(

            <div class="form-group" >
                  <label for={this.props.item.lableFor}><i className= {this.props.item.icon}></i><b> {this.props.item.title}</b></label>
                  <input type={this.props.item.inputType}
                        className="form-control w3-serif "
                        id={this.props.item.inputID}
                        placeholder={this.props.item.placeHolder}
                        name={this.props.item.inputID}
                        onChange={this.handleChange.bind(this)}
                        required>
                  </input>
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
    loginUser = async (values )=>{
          return ((await fetch({ url: './InsertSignup', method: "POST", body: values })).json());}

      handleSubmit=(e)=>{
           e.preventDefault();
           console.log("submit");

         }

    render() {
       console.log(this.props.data[0].url)

    const Formlist = this.props.data.map((jsonpart) =>(
          <FormItem item={jsonpart} />));
    return (
      <div>
      <form action ={this.props.data[0].url}  className=" mx-auto col-lg-6 "   method="POST"  required>

            {Formlist}
      </form>

          <button type="submit" className="btn btn-primary  border-0  w3-serif"  onSubmit={this.handleSubmit} >{this.props.data[0].btn}</button>

     </div>
        );
    }
  }


export default Formlist
