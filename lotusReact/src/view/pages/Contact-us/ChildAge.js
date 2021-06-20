
import React from 'react';
import ReactDOM from 'react-dom';
// import ageOptions from './ageOptions.js'


class ChildAge extends React.Component {
constructor(props){
  super(props);
  this.state={
    option:" ",
    check:false
  }
}

handleSelect=(event)=>{
  this.setState({option:event.target.value})

  // console.log(event.target.value)
}
  render() {
    console.log(this.state.option)

    return (
          <div className="pb-5 mx-auto ">
            <p><strong>  Child's age :</strong> </p>
            <div>
            { this.props.data.map(
                (item) =>(

                      <div className="form-check-inline">

                        <label className="form-check-label  mr-2" >
                             <input id={item.inputID} type="checkbox" className="form-check-input" value={item.value.split(",")[0]}  checked={this.state.check}onClick={this.handleSelect}></input>{item.title.split(",")[0]}</label>
                        <label className="form-check-label mr-2">
                            <input id={item.inputID} type="checkbox" className="form-check-input" value={item.value.split(",")[1]} onClick={this.handleSelect}></input>{item.title.split(",")[1]} </label>
                        <label className="form-check-label mr-2">
                           <input id={item.inputID} type="checkbox" className="form-check-input" value={item.value.split(",")[2]} onClick={this.handleSelect}></input>{item.title.split(",")[2]} </label>
                        <label className="form-check-label mr-2">
                           <input id={item.inputID} type="checkbox" className="form-check-input" value={item.value.split(",")[3]} onClick={this.handleSelect}></input>{item.title.split(",")[3]} </label>

                      </div>
                  )
                 )
               }
               </div>


         </div>
        );
    }
  }
export default ChildAge;
