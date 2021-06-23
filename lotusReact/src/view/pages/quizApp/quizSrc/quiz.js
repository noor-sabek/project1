import React, { useState } from 'react';
import questions from './Quizjson.js';
import './quiz.css';


//using hooks to set and update data
export default function Quizque(props) {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const [answer, updateAnswer] = useState('');
	const [checkAnswer, setAnswer]= useState('');




// בודק אם תשובה נכונה מוסיף 1
	const handleAnswerOptionClick = (answerSelected,question) =>{

      updateAnswer(answerSelected);

		if (question.isCorrect == 1) {
			alert("The answer is  correct!");
			setScore(score + 1);

			setAnswer("correct");

				console.log({answer});


		}
		else{
		   setAnswer("uncorrect");
			 alert("The answer is not correct!");
			 		console.log({answer});
	 }




// עובר לשאלה הבאה כאשר לוחצים על תשובה
		const nextQuestion = currentQuestion + 1;
		if (nextQuestion <props.data.questions.length) {
		    	setCurrentQuestion(nextQuestion);

		} else {
			setShowScore(true);
		}
	};
const	changeColor = (answer)=>{
		if(answer.isCorrect===1)
		 return ;


	}


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
					<h1> Play the quiz about  Montessori method </h1>
						<div className="question-count  text-center">
							<span>Question {currentQuestion + 1}</span>/{props.data.questions.length}
						</div>


						<div className = "question-text text-center question">

						     {props.data.questions[currentQuestion].questionText}
								 <p><img className=" picture" src={props.data.questions[currentQuestion].pic}/></p>
						</div>
					</div>
					<div className="answer-section text-center answer ">
					<ul className="Answers">
				 	  {props.data .answerOptions.map((answerOption,index) => (
							(props.data.answerOptions[index].Qnum ==  props.data.questions[currentQuestion].id)?
							  (

												<li  id="Answers"
												     className={
													           (props.data.answerOptions[index].isCorrect)===1 ? 'correct':
													           (props.data.answerOptions[index].isCorrect)===0 ? 'uncorrect':''
																	 }

													   onClick={() => handleAnswerOptionClick(props.data.answerOptions[index].answerText,props.data.answerOptions[index] )}
													>
																	{props.data.answerOptions[index].answerText}

													</li>
							 ):
									(<p> </p>)

							))}


							</ul>
					</div>
				</div>
			)}
		</div>
	);
}
