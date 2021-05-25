
import React from 'react';
import ReactDOM from 'react-dom';



class Relative extends React.Component {
constructor(props){
  super(props);
 }
  render() {
    return (
      <div className="pb-3" >
            <p><strong> You are:</strong></p>
            { this.props.data.map(
                (
               item => {
                         return(
                              <div className="pb-1">
                                  <input type="radio" id={item.inputID} name={item.name} value={item.value}></input>
                                  <label for={item.labelFor}>{item.labelFor}</label><br></br>
                              </div>
                            );
                         }
                 )
              )
          }

      </div>

        );
    }
  }
export default Relative;
