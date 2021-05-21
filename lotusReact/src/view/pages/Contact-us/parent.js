
import React from 'react';
import ReactDOM from 'react-dom';



class Parent extends React.Component {

  render() {
    return (
      <div>
            <p><strong> You are:</strong></p>
              <input type="radio" id="father" name="gender" value="father"></input>
              <label for="father">father</label><br></br>
              <input type="radio" id="mother" name="gender" value="mother"></input>
              <label for="mother">mother</label><br></br>
              <input type="radio" id="other" name="gender" value="other"></input>
              <label  class="mb-3 "for="other">other</label>
      <div/>

        );
    }
  }
export default Parent;
