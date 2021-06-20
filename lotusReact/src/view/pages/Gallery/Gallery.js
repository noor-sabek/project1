import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../../parts/header/header.js';
import Footer from '../../parts/footer/footer.js';
import Album from './AlbumPic.js';



class Gallery extends React.Component {
  constructor() {
    super();
    this.state = { data: [] };
  }

  componentDidMount() {
    fetch(`/Gallery`)

      .then(res => res.json())
      .then(json => this.setState({ data: json }))

  }

  render() {

    if (this.state.data.length===0)
       return ("opppps page error ")

    return (
      <div>
      <Header data={this.state.data.headerItems}/>
      <Album data={this.state.data.Content}/>
      <Footer data={this.state.data.footerItems}/>
      </div>

    );
  }
}



export default Gallery ;
