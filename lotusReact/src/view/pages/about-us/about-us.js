import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from 'react-bootstrap/Carousel';
import Header from '../../parts/header/header.js';
import Footer from '../../parts/footer/footer.js';
import AboutusCards from './AboutusCards.js';
import Card  from '../../general/card/card.js';
import'./AboutusCards.css';


class Cards extends React.Component {
  constructor() {
     super();
     this.state = { data: [] };
   }

   componentDidMount() {
     fetch(`/About`)
       .then(res => res.json())
       .then(json => this.setState({ data: json }));
   }
  render() {
   const Cards = this.state.data.map((jsonpart) =>(
        <Card item={jsonpart} />));
   return (
          <div class=" cards container  text-center mt-5">
                  <h1 className="text-center Heading mt-5 py-5"> ℍ𝕠𝕨 ℝ𝕒𝕚𝕟𝕓𝕠𝕨 𝕜𝕚𝕕𝕤 𝕨𝕠𝕣𝕜𝕤</h1>
                  <div class="card-deck py-5 ">
                             {Cards}
                  </div>
            </div>
      );
  }
}


class AboutUs extends React.Component {
  render() {
    return (
        < >
          <Header/>
          <Cards/>
          <Footer/>

       < />

    );
  }
}



export default AboutUs ;
