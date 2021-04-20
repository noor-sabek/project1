import React from 'react';
import ReactDOM from 'react-dom';
import './Carousel.css';
import img1 from '../../../../img/w5.jpg';
import img2 from '../../../../img/mon3.jpg';
import img3 from '../../../../img/mon4.jpg';
import img4 from '../../../../img/mon5.jpg';
import img5 from '../../../../img/MON6.jpg';
import img6 from '../../../../img/MON7.jpg';



class Carousel extends React.Component {
  render() {
    return (

      <div id="demo" className="carousel slide rounded" data-ride="carousel">


        <ul className="carousel-indicators">
          <li data-target="#demo" data-slide-to="0" className="active"></li>
          <li data-target="#demo" data-slide-to="1"></li>
          <li data-target="#demo" data-slide-to="2"></li>
          <li data-target="#demo" data-slide-to="3"></li>
          <li data-target="#demo" data-slide-to="4"></li>
          <li data-target="#demo" data-slide-to="5"></li>
         </ul>

        <div className="carousel-inner">

              <div className="carousel-item active">
                <img src={img1} alt="w5" ></img>
                <div className="carousel-caption">
                <h1>Rainbow kids</h1>
                <p>Wooden Toys</p>
               </div>
              </div>
              <div className="carousel-item">
                <img src={img2} alt="mon3" ></img>
                <div className="carousel-caption">
                  <h1>Rainbow kids</h1>
                  <p>Montessori in daily life</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src={img3} alt="mon5"></img>
                <div className="carousel-caption">
                <h1>Rainbow kids</h1>
                <p>Math Toys  IN Montessori </p>
                </div>
              </div>
                <div className="carousel-item">
                  <img src={img4} alt="mon4"></img>
                  <div className="carousel-caption">
                      <h1>Rainbow kids</h1>
                      <p>Montessori method in daily life</p>
                  </div>
              </div>
              <div className="carousel-item">
                <img src={img5} alt="mon6"></img>
                <div className="carousel-caption">
                    <h1>Rainbow kids</h1>
                    <p>Montessori method in daily life</p>
                </div>
            </div>
            <div className="carousel-item">
              <img src={img6} alt="mon7"></img>
              <div className="carousel-caption">
                  <h1>Rainbow kids</h1>
                  <p>Montessori method in daily life</p>
              </div>
           </div>
        </div>


          <a className="carousel-control-prev" href="#demo" data-slide="prev">
            <span className="carousel-control-prev-icon"></span></a>
          <a className="carousel-control-next" href="#demo" data-slide="next">
            <span className="carousel-control-next-icon"></span></a>
      </div>



    );
  }
}


export default Carousel;
