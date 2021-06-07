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


     <div class=" modalQuote mb-2 mt-5 mb-5 container ">

           <button type="button" className="adviceBtn btn btn-primary border-0" data-toggle="modal" data-target="#myModal">
             Add to your knowledge
           </button>
           <div className="modal fade " id="myModal"  aria-hidden="true">
             <div className="modal-dialog modal-lg">
               <div className="modal-content">

                <div className="modal-header">
                  <h4 className="modal-title">{this.props.data[randomNum].title}</h4>
                  <button type="button" className="close" data-dismiss="modal">×</button>
                </div>


                <div class="modal-body ">
                  <blockquote class="blockquote text-center">
                    <img src={this.props.data[randomNum].img}/>
                   <p class="mb-0 pt-5">{this.props.data[randomNum].contentBodyInfo}</p>
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
