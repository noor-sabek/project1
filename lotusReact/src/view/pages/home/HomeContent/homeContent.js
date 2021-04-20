import React from 'react';
import ReactDOM from 'react-dom';
import MyCarousel from './../Carousel/MyCarousel.js';
import NavTabs from './../NavTabs/NavTabs.js';
import FeedbackCards from '../feedback/feedback.js';
import './homeContent.css';




class HomeContent extends React.Component {
  render() {
    return (
      <>
        <MyCarousel/>
        <NavTabs/>
        <FeedbackCards/>
      </>
    );
  }
}
export default HomeContent;
