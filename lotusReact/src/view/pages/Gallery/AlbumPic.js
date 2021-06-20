import React from 'react';
import ReactDOM from 'react-dom';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import 'react-masonry-css';
import './Gallery.css';

// The number of columns change by resizing the window
class Album extends React.Component {
  constructor(props){
    super(props);
  }
    render() {
    const  images = this.props.data.map((img)=>{
        return(


              <div class="flip-card" key={img.id}>
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                      <img  className="imgCard w3-animate-fading" src={img.src} />
                    </div>
                    <div class="flip-card-back">
                      <h1>{img.name}</h1>
                      <p>{img.info}</p>
                      <p>We love that toy</p>
                    </div>
                  </div>
                </div>

        )
      });
        return (
            <ResponsiveMasonry
                columnsCountBreakPoints={{350: 1,500: 2, 900: 3, 1200: 4}}
            >
            <h1 className="text-center Heading mt-5 py-5"> Some pictures </h1>
                <Masonry className="my-masonry-grid" columnClassName="my-masonry-grid_column">
                  {images}
                </Masonry>
            </ResponsiveMasonry>
        )
    }
}
export default Album;
