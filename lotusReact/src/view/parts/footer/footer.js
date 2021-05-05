import React from 'react';
import ReactDOM from 'react-dom';
import './footer.css';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from 'mdbreact';
import Icon from './icon/icon.js';
import LogoPic from '../../general/logo/logo.js';
import './footer.css';


class FooterPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
  return (
    <MDBFooter  className="font-small pt-4 mt-4 " >
      <MDBContainer fluid className="text-center text-md-left ">
        <MDBRow className="text-center ">

          <MDBCol md="4">
            <h5 className="footer-heading text-center"><LogoPic/></h5><br/>
              <p className="text-center note">  Let's Keep in Touch  </p>
              <p className="text-center note"> Give us a call :05028387377</p>

              <Icon/>

          </MDBCol>
          <MDBCol md="4">
            <h5 className="footer-heading  "> Quick Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">chat</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Get a free online course</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Online Video Guides</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Test your knowledge</a>
              </li>
            </ul>
          </MDBCol>

          <MDBCol md="4">
            <h5 className="footer-heading text-center"> Subscribe</h5>

            <form class=" form-control subscribe" novalidate="novalidate" action="#" method="post" id="newsletter-validate-detail">
              <label class=" label mr-5 text-danger " for="newsletter"><span>Sign Up:</span></label>
              <input  name="email" type="email" id="newsletter" placeholder="Enter your email address" data-validate="{required:true, 'validate-email':true}"></input>
              <button type="submit" class="btn btn-default text-danger float-right">Submit</button>
            </form>

          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
        <p > So glad you are here , we will contact you soon THANK YOU !&#128525; &#128151; </p>

        </MDBContainer>
      </div>
  </MDBFooter>
  );
 }
}
export default FooterPage;
