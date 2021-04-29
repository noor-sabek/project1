import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../../parts/header/header.js';
import Footer from '../../parts/footer/footer.js';
import HomeContent from './HomeContent/homeContent.js';

class Home extends React.Component {
  render() {
    return (
      <div>
         <Header />
         <HomeContent/>
         <Footer/>
      </div>
    );
  }
}



export default Home ;
