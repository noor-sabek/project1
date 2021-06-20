import React from 'react';
import ReactDOM from 'react-dom';
import MyCarousel from '../../../general/Carousel/MyCarousel.js';
import NavTabs from './../NavTabs/NavTabs.js';
import FeedbackCards from '../feedback/feedback.js';
import InfoModal from '../modal/modal.js';
import ChatBox from '../../../general/chat/chat.js';
import './homeContent.css';




class HomeContent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <MyCarousel data={this.props.data.Carousel}/>
        <NavTabs data={this.props.data.CatNavData}/>
        <ChatBox/>
        <FeedbackCards data={this.props.data.Feedback}/>
        <InfoModal data={this.props.data.Modal}/>

      </div>
    );
  }
}
export default HomeContent;
