import React from 'react';
import ReactDOM from 'react-dom';
import './card.css';


class Card extends React.Component{
  constructor(props){
     super(props);
  }

  render(){
    return(

          <div className="card rounded-lg  border-1 shadow-lg">
            <img className="card-img-top rounded-circle" src={this.props.item.cardImgtop} alt="Card image" ></img>
            <div className="card-body w3-serif">
               <p className="card-title font-weight-bolder font-italic">{this.props.item.cardTitle}</p>
               <p className="card-text"> {this.props.item.cardText}</p>
              <a href={this.props.item.pathButton} class="btn btn-primary badge badge-pill badge-danger border border-0">{this.props.item.buttonTitle}</a>
            </div>
          </div>
   );
  }
}
export default Card;
