
import React from 'react';
import ReactDOM from 'react-dom';
// import ageOptions from './ageOptions.js'


class ChildAge extends React.Component {
constructor(props){
  super(props);
}
  render() {
    return (
      <div className="pb-5">
            <p><strong>  Child's age :</strong> </p>
            { this.props.data.map(
                (
               item => {
                         return(
                              <div class="form-check-inline">
                                <label class="form-check-label">
                                  <input  id={item.inputID} type="checkbox" class="form-check-input" value={item.value}></input>{item.title}
                                </label>
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
export default ChildAge;
