
import React from 'react';
import ReactDOM from 'react-dom';



class Message extends React.Component {
  constructor(props)
  {
    super(props);
    this.state={
      message:"null ",
      rememberMe:" false"
    }
  }

  handleMessage=(event)=>{
      this.setState({message:event.target.value})
      console.log(event.target.value)


    }

  handeleCheckRemeber=(event)=>{
     this.setState({rememberMe:event.target.checked})
     console.log(event.target.checked)
    }

  render() {
    return (
      <div>
        <p><strong> &#128173;   let's keep in touch & leave me a message </strong></p>
           <textarea className="form-control mt-3 mb-2 col-lg-6 mx-auto " id="fmessage" name="message" rows="5"  placeholder="Tap here " onChange={this.handleMessage} required></textarea>
            <div className="form-group form-check">
              <label className="form-check-label">
                <input className="form-check-input" type="checkbox" name="remember" checked={this.state.rememberMe}  onChange={this.handeleCheckRemeber}required></input> I agree to send me updating
                <div className="valid-feedback">Valid.</div>
                <div className="invalid-feedback">Check this checkbox to continue.</div>
              </label>
            </div>
      </div>

        );
    }
  }
export default Message;
