import React from 'react';
import ReactDOM from 'react-dom';
import MyCarousel from '../../../general/Carousel/MyCarousel.js';
import NavTabs from './../NavTabs/NavTabs.js';
import FeedbackCards from '../feedback/feedback.js';
import './homeContent.css';




class HomeContent extends React.Component {
  render() {
    return (
      <div>
        <MyCarousel/>
        <NavTabs/>
        <FeedbackCards/>
      </div>
    );
  }
}
export default HomeContent;
