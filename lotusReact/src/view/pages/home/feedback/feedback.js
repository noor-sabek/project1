import React from 'react';
import ReactDOM from 'react-dom';
import Card  from '../../../general/card/card.js';
import ParentSharing from './parentsSharing.js';
import './feedback.css';


class FeedbackCards extends React.Component {
  constructor(props) {
     super(props);
   }
  render() {
   const Cards = this.props.data.map((jsonpart) =>(
        <Card item={jsonpart} />));
   return (
          <div class=" cards container  text-center mt-5">
                  <h1 className="text-center feedbackHeading mt-5 py-5"> What Parents Are Saying</h1>
                  <div class="card-deck py-5 ">
                             {Cards}
                  </div>
            </div>
      );
  }
}
export default FeedbackCards;
