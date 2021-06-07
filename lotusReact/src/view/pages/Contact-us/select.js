import React from 'react';
import ReactDOM from 'react-dom';
import Getitle from './getitle.js'


class Selector extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.data[0].value.split(',')[1])
    return (
      <div>
           <p ><strong> Your child is a:</strong></p>
            <div class="form-group mt-2">
                <select name="gender" class="custom-select" required >
                  <option value="null" disabled selected>Choose</option>
                  <option value={this.props.data[0].value.split(',')[0]}>{this.props.data[0].value.split(',')[0]}</option>
                  <option female={this.props.data[0].value.split(',')[1]}>{this.props.data[0].value.split(',')[1]}</option>
                </select>
           </div>
      </div>

        );
    }
  }





 export default Selector;
