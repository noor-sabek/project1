import React, { useState } from 'react';

import './quiz.css';

class Quizque extends React.Component{
	constructor(props){
		super(props);
		this.currentQuestion = 0;
		this.setCurrentQuestion =0;
		this.score=0;
		this.setScore=0;
		this.showScore = false;
		this.setShowScore = false;

	  }
	render()
	{

		const handleAnswerOptionClick = (isCorrect) => {
				const nextQuestion = this.currentQuestion +1;

			if (isCorrect) {
				this.setScore= this.score + 1;
				alert( nextQuestion)
			}
				alert("the answer is not correct!")

		if (nextQuestion < this.props.data.length) {

		    	this.setCurrentQuestion=nextQuestion;
						alert(this.setCurrentQuestion)
		 }
		  else
		{
			this.setShowScore=true;
			this.showScore=true;

		}
	};


return (

			<div  className="container content pt-5 pb-5">
				{this.showScore ? (
					<div className=" finalPage score-section">
						<h1>You scored {this.score} out of {this.props.data.length}</h1>
					</div>
				) : (
					<div className="Qcontent">

					<div className="question-section text-center">
						<div className="question-count text-center ">
							<span>Question {this.currentQuestion + 1}</span>/{this.props.data.length}
						</div>
						<div className = "question-text text-center question">{this.props.data[this.currentQuestion].questionText}</div>
					</div>

					<div className="answer-section text-center answer">

						{this.props.data[this.currentQuestion].answerOptions.map((answerOption) => (
							<button  className="quizbtn ml-5"
							onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>


				</div>
				)}
			</div>
		 );
	}
}




// class Answer extends React.Component{
// 	render()
//   {
//
// 		return(
//
//
//    );
//   }
// }


// class Question extends React.Component{
//  render()
// 		{
// 			return(
//
// 				<div className="question-section text-center">
// 					<div className="question-count text-center ">
// 						<span>Question {this.currentQuestion + 1}</span>/{this.props.data.length}
// 					</div>
// 					<div className = "question-text text-center question">{this.props.data[this.currentQuestion].questionText}</div>
// 				</div>
// 			);
// 		}
//
// 	}


export default  Quizque;
