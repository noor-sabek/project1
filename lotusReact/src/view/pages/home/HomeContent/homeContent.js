import React from 'react';
import ReactDOM from 'react-dom';
import MyCarousel from '../../../general/Carousel/MyCarousel.js';
import NavTabs from './../NavTabs/NavTabs.js';
import FeedbackCards from '../feedback/feedback.js';
import InfoModal from '../modal/modal.js';
import './homeContent.css';




class HomeContent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <MyCarousel data={this.props.data.Carousel}/>
          <InfoModal data={this.props.data.Modal}/>
        <NavTabs data={this.props.data.CatNavData}/>
        <FeedbackCards data={this.props.data.Feedback}/>

      </div>
    );
  }
}
export default HomeContent;
