import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../../parts/header/header.js';
import Footer from '../../parts/footer/footer.js';
import HomeContent from './HomeContent/homeContent.js';

class Home extends React.Component {
  constructor() {
    super();
    this.state = { data: [] };
  }

  componentDidMount() {
    fetch(`/home`)

      .then(res => res.json())
      .then(json => this.setState({ data: json }))

  }

  render() {

    if (this.state.data.length===0)
       return ("opppp home.js")

    return (
      <div>
         <Header data={this.state.data.headerItems}/>
         <HomeContent data={this.state.data.Content}/>
         <Footer data={this.state.data.footerItems}/>
      </div>
    );
  }
}



export default Home ;
