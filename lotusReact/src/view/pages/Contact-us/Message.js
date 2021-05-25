
import React from 'react';
import ReactDOM from 'react-dom';



class Message extends React.Component {

  render() {
    return (
      <div>
        <p><strong> &#128173;   let's keep in touch & leave me a message </strong></p>
           <textarea class="form-control mt-3 mb-2" id="fmessage" name="message" rows="5"  placeholder="Tap here " required></textarea>
            <div class="form-group form-check">
              <label class="form-check-label">
                <input class="form-check-input" type="checkbox" name="remember" required></input> I agree to send me updating
                <div class="valid-feedback">Valid.</div>
                <div class="invalid-feedback">Check this checkbox to continue.</div>
              </label>
            </div>
      </div>

        );
    }
  }
export default Message;
