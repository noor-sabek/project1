import React from 'react';
import ReactDOM from 'react-dom';



class Selector extends React.Component {

  render() {
    return (
      <>
           <p ><strong> Your child is a:</strong></p>
            <div class="form-group mt-2">
                <select name="gender" class="custom-select" required >
                  <option value="" disabled selected>Choose</option>
                  <option value="boy">male</option>
                  <option value="girl">female</option>
                </select>
            </div>


      </>

        );
    }
  }
export default Selector;
