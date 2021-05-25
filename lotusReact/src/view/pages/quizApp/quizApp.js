import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../../parts/header/header.js';
import Footer from '../../parts/footer/footer.js';
import  Quizque from './quizSrc/quiz.js';


class QuizApp extends React.Component {
  constructor() {
    super();
    this.state = { data: [] };
  }

  componentDidMount() {
    fetch(`/QuizApp`)

      .then(res => res.json())
      .then(json => this.setState({ data: json }))

  }

  render() {

    if (this.state.data.length===0)
       return ("opppps quiz ")
  console.log(this.state.data.headerItems)
    return (

        <div>
          <Header data={this.state.data.headerItems}/>
          <Quizque data={this.state.data.Content}/>
          <Footer data={this.state.data.footerItems}/>

       < /div>

    );
  }
}



export default QuizApp ;
