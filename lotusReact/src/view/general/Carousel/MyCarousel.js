import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import BuildCarousel from './BuildCarousel.js';
import './MyCarousel.css';



class DemoCarousel extends  Component {
    render() {
    return (
               <BuildCarousel/>
        );
    }
}

export default DemoCarousel;
