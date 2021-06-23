 import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../../parts/header/header.js';
import Footer from '../../parts/footer/footer.js';
import Card  from '../../general/card/card.js';
import MyPassion from './passionContent.js';
import'./AboutusCards.css';


class Cards extends React.Component {
  constructor(props){
     super(props);
  }
  render() {

   const Cards = this.props.data.map((jsonpart) =>(
        <Card item={jsonpart} />));
   return (
          <div class=" cards container  text-center mt-5">
                  <h1 className="text-center Heading mt-5 py-5"> ℍ𝕠𝕨 ℝ𝕒𝕚𝕟𝕓𝕠𝕨 𝕜𝕚𝕕𝕤 𝕨𝕠𝕣𝕜𝕤</h1>
                  <h2 className="w3-animate-right text-monospace"> The Montessori Method Of Education </h2>

                       <MyPassion />

                  <div class="card-deck ">
                             {Cards}
                  </div>


            </div>
      );
  }
}


class AboutUs extends React.Component {
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
    if (this.state.data.length===0)
       return ("opppp about.js")
    return (
        <div>
          <Header data={this.state.data.headerItems}/>
          <Cards data={this.state.data.content}/>
          <Footer  data={this.state.data.footerItems}/>

       < /div>

    );
  }
}



export default AboutUs ;
