import React from 'react';
import ReactDOM from 'react-dom';
import './modal.css';


class InfoModal extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    let randomNum=Math.floor((Math.random() * this.props.data.length) + 0);
    console.log(Math.floor((Math.random() * this.props.data.length) + 1))

   return (

// tips to increase the knowledge
     <div className=" modalQuote mb-2 mt-5 mb-5 ">
           <span className="   w3-spin click w3-tag w3-xxlarge w3-padding w3-red " >
                Click
          </span>

          <img src="/img/tip.jpg " className=" modalbtn w3-rounded w3-btn"  data-target="#myModal" data-toggle="modal" />
           <div className="modal fade  w3-animate-zoom" id="myModal"  aria-hidden="true">
             <div className="modal-dialog modal-lg">
               <div className="modal-content">

                <div className="modal-header ">
                  <h4 className="modal-title ">{this.props.data[randomNum].title}</h4>
                  <button type="button" className="close" data-dismiss="modal">×</button>
                </div>


                <div class="modal-body ">
                  <blockquote class="blockquote text-center">
                    <img src={this.props.data[randomNum].img}/>
                   <p class="mb-0 pt-5 text-monospace">{this.props.data[randomNum].contentBodyInfo}</p>
                   <footer class="blockquote-footer"> {this.props.data[randomNum].footerBy} <cite title="Source Title"> {this.props.data[randomNum].footerSource}</cite></footer>
                 </blockquote>
                </div>

                 <div class="modal-footer">
                   <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                 </div>

               </div>
             </div>
           </div>

        </div>
      );
  }
}
export default InfoModal;
