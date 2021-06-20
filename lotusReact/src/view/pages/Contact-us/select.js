import React from 'react';
import ReactDOM from 'react-dom';


class Selector extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      option:" null"
    }
  }
  // after selecting  an option an it  save itin op state
  handleSelect=(event)=>{
    this.setState({option:event.target.value})
    console.log(event.target.value)
  }
  render() {
    // console.log(this.props.data[0].value.split(',')[1])
    return (
      <div>
           <p ><strong> Your child is a:</strong></p>
            <div className=" col-lg-6  mx-auto  form-group mt-2">
                <select name="gender" class="custom-select" onChange={this.handleSelect} required >
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
