import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import Styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

class BuildCarousel extends React.Component  {
  constructor(props) {
     super(props);
  }
    render() {
      const BuildCarousel = this.props.data.map((jsonpart) =>(
          <CarouselItem item={jsonpart} />));
        return (
                <Carousel autoPlay infiniteLoop >
                  {BuildCarousel}
                </Carousel>
        );
    }
}



class CarouselItem extends React.Component  {
  constructor(props){
    super(props);
  }
    render() {

        return (
                <div>
                    <img src={this.props.item.image} />
                    <h1 className="carousel-caption">{this.props.item.caption}</h1>
                </div>
        );
    }
}
export default BuildCarousel;
