import React from 'react';
import ReactDOM from 'react-dom';
 import LogInForm from '../../general/registration/log-in/logInForm.js';
import AdminItems from '../../general/user/user-menu/AdminItems.js';
import './login.css'

class LoginCard extends React.Component{
  constructor(props){
    super(props);
  }

  render() {
    console.log(this.props.data)

    return(
      <div class=" cards container  text-center mt-5">
        <h1 className="text-center Heading mt-5 py-5"> ℝ𝕒𝕚𝕟𝕓𝕠𝕨 𝕜𝕚𝕕𝕤 </h1>
          <div class="userCard py-5 ">
            <div className=" rounded-lg  border-1 shadow-lg">
              <img className="card-img-top rounded-circle userimg " src="/img/user-img.png " alt="Card image" ></img>
              <div className="card-body">
                 <p className="card-title font-weight-bolder font-italic">Welcome Back Member</p>

                   <LogInForm  data={this.props.data}/>
                   <AdminItems/>

              </div>
            </div>
         </div>
     </div>

    )
  }
}


 export default LoginCard
