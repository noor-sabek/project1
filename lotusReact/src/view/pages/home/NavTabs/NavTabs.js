import React from 'react';
import ReactDOM from 'react-dom';
import LiTitle from '../../../general/fillNavTap/LiTitle.js';
import ULTITLE from'../../../general/fillNavTap/ULTitle.js';
import FillTabContent from '../HomeContent/fillTabContent.js';
import TabContent from '../HomeContent/tabContent.js';
// import CatNavData from '../HomeContent/CatNavData.js';
import  TitleHeading from './TitleHeading.js';

class NavTabs extends React.Component {
  constructor() {
     super();
     this.state = { data: [] };
   }

   componentDidMount() {
     fetch(`./catNavData`)
       .then(res => res.json())
       .then(json => this.setState({ data: json }));
   }
  render(){
    return (

      <div className="container  text-center mb-5">

        <h1 className=" Getoptions text-center"> 𝔾𝕖𝕥 𝕄𝕠𝕣𝕖 𝕆𝕡𝕥𝕚𝕠𝕟𝕤 </h1>

        <ULTITLE myjson={TitleHeading}/>

        <div className="tab-content col-12 align-center ">



          <div id="Monti-Toys" className=" part1 col-12 tab-pane fade mt-5 ">
              <h3>Select Your Child's Age</h3>
              <div className="container">
                    <ULTITLE myjson={this.state.data}/>
                    <FillTabContent myjson={this.state.data} />
             </div>
          </div>



          <div id="Why-Montossori" className=" part2 col-12 tab-pane fade mt-5">
            <h3>Why Montossori</h3>
            <p> Maria Montessori is as controversial a figure in education today as she was a half century ago. Alternately heralded as the century’s leading advocate for early childhood education, or dismissed as outdated and irrelevant, her research and the studies that she inspired helped change the course of education.</p>
          </div>

          <div id="PARENT" className=" part2 col-12 tab-pane fade mt-5">
              <h3>Parent’s Role</h3>
              <p>Hello parent and welcome to my website,Without parent support from home, your child will not get the full benefits of our program as intended. We truly believe the old saying, “it takes a village to raise a child”. We feel honored to partner with you in shaping and raising your child. Parenting isn't easy but it is so important </p>
          </div>

          <div id="Activities" className=" part2 col-12 tab-pane fade mt-5">
              <h3>Montessori Activities</h3>
              <p>Toddler & Preschooler Montessori Activities - Using What You Already Have!,Today I want to share with you twelve really easy Montessori activities that use materials you may already have at home. Most of these activities are best suited to toddlers and preschoolers. Many of these activities I do with my toddler but an older child may like to do them independently.  </p>
          </div>

          <div id="Gallery" className="part2 col-12 tab-pane fade mt-5">
              <h3>Gallery</h3>
              <p>Click  here to see more</p>
          </div>

        </div>
      </div>


      );
  }
}
export default NavTabs;
