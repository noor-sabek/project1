import React from 'react';
import ReactDOM from 'react-dom';



class Selector extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
           <p ><strong> Your child is a:</strong></p>
            <div class="form-group mt-2">
                <select name="gender" class="custom-select" required >
                  <option value="null" disabled selected>Choose</option>
                    { this.props.data.map((item =>
                             {
                                 return(
                                      <option id={item.inputID} value={item.value}>{item.value}</option>
                                  );
                               }
                           ))
                  }

                </select>
           </div>
      </div>

        );
    }
  }
export default Selector;
