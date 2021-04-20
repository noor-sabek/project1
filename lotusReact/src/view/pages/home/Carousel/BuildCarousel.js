import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CarouselItems from './CarouselItems.js';
import { Carousel } from 'react-responsive-carousel';


class BuildCarousel extends React.Component  {
    render() {
      const BuildCarousel = CarouselItems.map((jsonpart) =>(
          <CarouselItem item={jsonpart} />));
        return (
                <Carousel>
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
                    <img src={this.props.item.img} />
                    <h1 className="carousel-caption">{this.props.item.caption}</h1>
                </div>
        );
    }
}
export default BuildCarousel;
