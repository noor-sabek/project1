
import React from 'react';
import ReactDOM from 'react-dom';



class Content extends React.Component {
  constructor(props){
     super(props);
  }

  render() {
    return(


          <div className="container pt-5">
           <h1 className="text-center  mt-5 py-5 title"> 𝖒𝖞 𝖕𝖆𝖘𝖘𝖎𝖔𝖓 </h1>
          <div className=" mt-4 p-4 row">
              <div className="col-6 p-3 ">
                  <img src="/img/preg3.png"></img>
              </div>
              <div className="col-6 text-center pt-5 ">
                  <p> On my journy, witch started 3 years ago ,i fell
                          in love with a quote I read by Dr.Maria Montessori stating:</p>
                    <p>
                        <b className="text-muted">"The education of a small child therefor does not prepare him for school,but for life."</b>
                    </p>
                    <p>

                         In these vital years it is essential to help build a child's life skills,
                         guiding them in how to learn rather than what to learn.

                    </p>
              </div>
          </div>
          </div>
        )
  }
 }
 export default Content;
