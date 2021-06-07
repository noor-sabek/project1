import React from 'react';
import ReactDOM from 'react-dom';
import './contact-us.css';
import Header from '../../parts/header/header.js';
import Footer from '../../parts/footer/footer.js';
import ConUsForm from './ConUsContent.js';
import Selector from './select.js';
import ChildAge from './ChildAge.js';
import Message from './Message.js';
import Relative from './relative.js';


class ContactUs extends React.Component {
  constructor() {
    super();
    this.state = { data: [] };
  }

  componentDidMount() {
    fetch(`/ContactUS`)

      .then(res => res.json())
      .then(json => this.setState({ data: json }))

  }

  render() {
    if (this.state.data.length===0)
       return (this.state.data)

    return (
      <div>
        <Header data={this.state.data.headerItems}/>
        <div className="container p-5 ">
         <div className="style ">
             <h1 className=" text-center mt-5 py-5 title">𝑪𝒐𝒏𝒕𝒂𝒄𝒕 𝑼𝒔</h1>
                <p className="  text-info text-center">𝒘𝒉𝒂𝒕 𝒘𝒐𝒖𝒍𝒅 𝒚𝒐𝒖 𝒍𝒊𝒌𝒆 𝒕𝒐 𝒕𝒂𝒍𝒌 𝒂𝒃𝒐𝒖𝒕 </p>
                <form action="/action_page.php " required class="  et_pb_newsletter_form et_pb_login_form col-7  mx-auto">
                     <ConUsForm data={this.state.data.Content.form}/>
                     <Relative data={this.state.data.Content.relative}/>
                     <Selector data={this.state.data.Content.genderSelector}/>
                     <ChildAge data={this.state.data.Content.ageOptions}/>
                     <Message data={this.state.data.Content.message}/>
                    <button type="submit" class="btn btn-primary  border-0 float-right" >Submit</button>
                </form>

           </div>
         </div>
        <Footer data={this.state.data.footerItems}/>
    </div>
    );
  }
}



export default ContactUs ;
