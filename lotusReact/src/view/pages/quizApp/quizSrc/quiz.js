import React, { useState } from 'react';
import questions from './Quizjson.js';
import './quiz.css';

export default function Quizque(props) {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
  // const [clicked,setClicked] = useState(false);


// בודק אם תשובה נכונה מוסיף 1
	const handleAnswerOptionClick = (isCorrect) =>{
		if (isCorrect == 1) {
			setScore(score + 1);

		}

// עובר לשאלה הבאה כאשר לוחצים על תשובה
		const nextQuestion = currentQuestion + 1;
		if (nextQuestion <props.data.questions.length) {

			setCurrentQuestion(nextQuestion);

		} else {
			setShowScore(true);
		}
	};

console.log()
	return (
		<div className= "container content pt-5 pb-5 ">
			{showScore ? (
				<div className="finalPage score-section">
				<p> Good Job <i class="fa fa-hand-peace-o" aria-hidden="true"></i></p>
				<p><strong>
			     		You scored {score} out of {props.data.questions.length}

					</strong></p>
				
					<a href="http://localhost:3000/QuizApp"> Try Again</a>
				</div>
			) : (
				<div className="Qcontent">
					<div className="question-section text-center">
						<div className="question-count  text-center">
							<span>Question {currentQuestion + 1}</span>/{props.data.questions.length}
						</div>

						<div className = "question-text text-center question">{props.data.questions[currentQuestion].questionText}</div>
					</div>
					<div className="answer-section text-center answer ">
				 	  {props.data .answerOptions.map((answerOption,index) => (
							(props.data.answerOptions[index].Qnum ==  props.data.questions[currentQuestion].id)?
							  ( 	<p><button className="quizbtn ml-5" onClick={() => handleAnswerOptionClick(props.data.answerOptions[index].isCorrect)}>
											{props.data.answerOptions[index].answerText}
									</button></p>):
									(<p> </p>)

							))}
					</div>
				</div>
			)}
		</div>
	);
}
