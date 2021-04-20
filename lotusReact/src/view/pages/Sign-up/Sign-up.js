import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../../parts/header/header.js';
import Footer from '../../parts/footer/footer.js';
import HomeContent from '../home/HomeContent/homeContent.js';
import Form from './form/form.js';
import './signUp.css';



class SignUp extends React.Component {
  render() {
    return (
    < >
      <Header/>

      <div className=" container col-8 style pt-4">
         <div className=" pb_text_align_left">
               <div className="content">
                 <h1 className="text-center title mt-5 py-5">𝑴𝒆𝒎𝒃𝒆𝒓 𝒍𝒐𝒈𝒊𝒏 </h1>
                 <div className="text-center"><strong>Welcome to our new website.<br></br> If you are an existing member logging in to the new website for the first time, please enter your email address and password
                   <a href="#" >   here</a>.</strong>
                 </div>
               </div>

               <Form/>

         </div>
       </div>
      <Footer/>
   < />

    );
  }
}



export default SignUp ;
