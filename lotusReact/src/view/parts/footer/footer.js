import React from 'react';
import ReactDOM from 'react-dom';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from 'mdbreact';
import FooterIcons from './FooterIcons/FooterIcons.js';
import LogoPic from '../../general/logo/logo.js';
import BuildList from './QuickLinks/FlinksBox';
import Subscribe from './subscribe/subscribe.js';
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
            <h5 className="footer-heading ">  <LogoPic/>  </h5><br/>

              <p className="text-center note">  Let's Keep in Touch  </p>
              <p className="text-center note"> Give us a call :<a href="#">05028387377</a></p>

              <FooterIcons item={this.props.data}/>

        </MDBCol>

        <MDBCol md="4">

            <h5 className="footer-heading  "> Quick Links</h5>
            <BuildList item={this.props.data}/>

        </MDBCol>



        <MDBCol md="4">

            <h5 className="footer-heading text-center"> Subscribe </h5>
            <Subscribe />

        </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-right py-3">
        <MDBContainer fluid>

           <button type="button" class="btn btn-dark"><i class="fa fa-caret-square-o-up icon Topicon btn-lg" aria-hidden="true" href="#"></i></button>
        </MDBContainer>
      </div>
  </MDBFooter>
  );
 }
}
export default FooterPage;
