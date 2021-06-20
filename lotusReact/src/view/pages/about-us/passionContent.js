
import React from 'react';
import ReactDOM from 'react-dom';



class MyPassion extends React.Component {
  constructor(props){
     super(props);
  }

  render() {
    return(


          <div className="container pt-5">

          <div className=" mt-4 p-4 row w3-panel w3-leftbar">
              <div className="col-6 p-3 ">
                  <img src="/img/preg3up.png"></img>
              </div>
              <div className="col-6 text-center pt-5 ">
                  <p className="w3-xlarge w3-serif text-monospace"> On my journy, witch started 3 years ago ,i fell
                          in love with a quote I read by Dr.Maria Montessori stating:</p>
                    <p className="w3-xlarge w3-serif text-monospace">
                        <b className="text-muted">"The education of a small child therefor does not prepare him for school,but for life."</b>
                    </p>

                    <p className="w3-xlarge w3-serif text-monospace">

                         In these vital years it is essential to help build a child's life skills,
                         guiding them in how to learn rather than what to learn.

                    </p>
              </div>
          </div>
          </div>
        )
  }
 }
 export default MyPassion;
