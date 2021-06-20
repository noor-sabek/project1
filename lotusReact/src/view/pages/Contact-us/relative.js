
import React from 'react';
import ReactDOM from 'react-dom';



class Relative extends React.Component {
constructor(props){
  super(props);
  this.state={
    option:" "
  }
 }
 handleSelect=(event)=>{
   this.setState({option:event.target.value})
   console.log(event.target.value)
 }
  render() {

  console.log(this.props.data)
    return (
      <div className="pb-2 " >
            <p><strong> You are:</strong></p>
            { this.props.data.map((item)=>
                    {
                         return(

                                <div className="pb-1">
                                    <input  type="radio" id={item.inputID} value={item.value.split(',')[0]} onChange={this.handleSelect}></input>
                                    <label for={item.labelFor}>{item.title.split(',')[0]}</label><br></br>
                                    <input  type="radio" id={item.inputID}  value={item.value.split(',')[1]} onChange={this.handleSelect}></input>
                                    <label for={item.labelFor}>{item.title.split(',')[1]}</label><br></br>
                                    <input  type="radio" id={item.inputID}  value={item.value.split(',')[2]} onChange={this.handleSelect}></input>
                                    <label for={item.labelFor}>{item.title.split(',')[2]}</label><br></br>


                                </div>

                               );

                      }
                    )
                }

      </div>

        );
    }
  }
export default Relative;
