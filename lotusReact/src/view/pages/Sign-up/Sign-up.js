import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../../parts/header/header.js';
import Footer from '../../parts/footer/footer.js';
import HomeContent from '../home/HomeContent/homeContent.js';
import Form from './form/form.js';
import AdminItems from '../../general/user/user-menu/AdminItems.js';
import './signUp.css';



class SignUp extends React.Component {
  constructor() {
    super();
    this.state = { data: [] };
  }

  componentDidMount() {
    fetch(`/Signup`)

      .then(res => res.json())
      .then(json => this.setState({ data: json }))

  }

  render() {

        if (this.state.data.length===0)
           return ("opppp Signup.js")

    return (
    <div>
      <Header data={this.state.data.header}/>

      <div className=" container col-8 style pt-4">
         <div className=" pb_text_align_left">
               <div className="content">
                 <h1 className="text-center title mt-5 py-5">𝑴𝒆𝒎𝒃𝒆𝒓 𝒍𝒐𝒈𝒊𝒏 </h1>
                 <div className="text-center"><strong>Welcome to our new website.<br></br> If you are an existing member logging in to the new website for the first time, please <b>create an account </b> and enter your email address and password
                   <a href="#" >   here</a>.</strong>
                 </div>
               </div>

               <Form />
               <AdminItems/>


         </div>
       </div>
      <Footer  data={this.state.data.Footer}/>
   < /div>

    );
  }
}



export default SignUp ;
