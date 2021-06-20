import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../../parts/header/header.js';
import Footer from '../../parts/footer/footer.js';
import HomeContent from '../home/HomeContent/homeContent.js';
import Form from '../../general/registration/form/form.js';

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
  handleSubmit=() =>{
    console.log("ok")

  }

  render() {
      console.log(this.state.data.Content)
        if (this.state.data.length===0)
           return ("opppp Signup.js")

    return (
    <div>
      <Header data={this.state.data.headerItems}/>

      <div className=" container col-8 style pt-4">

         <div className=" pb_text_align_left" >


                 <div className="w3-panel w3-leftbar w3-sand">
                 <h1 className="text-center title mt-5 py-5">SIGN UP  </h1>
                         <p className="w3-xlarge w3-serif">
                             <i> <strong>Welcome to our new website.<br></br> If you are an existing member logging in to the new website for the first time,
                               <a href="https://mcusercontent.com/74696d571189302f0eef8b1ac/files/9ac660df-af8f-4019-9a70-aed82e2f4b81/eBook_Refresh2020_HS_AJ_REV2.pdf?utm_source=Monti+Kids+Master&utm_campaign=30288c28d3-2020-eBook-Offer&utm_medium=email&utm_term=0_d5972d1ea8-30288c28d3-333506838&mc_cid=30288c28d3&mc_eid=121a465343" >
                               click here </a> to get an ebook about , 7 Montessori Ways To Support your baby's learning .</strong>
                             </i>
                         </p>
                  </div>


           <div className="et_pb_newsletter_form et_pb_login_form  mt-5">
              <Form data={this.state.data.Content} />
           <button type="submit" className="btn btn-primary  border-0 " onClick={this.handleSubmit} >SIGN UP</button>
          </div>
         </div>
       </div>
    <Footer  data={this.state.data.footerItems}/>
   </div>

    );
  }
}



export default SignUp ;
