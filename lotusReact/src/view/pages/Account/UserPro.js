import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../../parts/header/header.js';
import Footer from '../../parts/footer/footer.js';
import LoginCard from './logIn.js';



class UserPro extends React.Component{
  constructor() {
    super();
    this.state = { data: [] };
  }

  componentDidMount() {
    fetch(`/userLogin`)

      .then(res => res.json())
      .then(json => this.setState({ data: json }))

  }

  render() {

    if (this.state.data.length===0)
       return ("opppp userLogin.js")

    return (
      <div>

            <Header data={this.state.data.header}/>
             <LoginCard  data={this.state.data.content}/>
            <Footer  data={this.state.data.Footer}/>

      </div>
    );
  }

  }
  export default UserPro
