import React, { useState } from 'react';
import questions from './Quizjson.js';
import './quiz.css';

export default function Quizque() {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect=1) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};


	return (
		<div className= "container content pt-5 pb-5 ">
			{showScore ? (
				<div className="finalPage score-section">
					You scored {score} out of {questions.length}
				</div>
			) : (
				<div className="Qcontent">
					<div className="question-section text-center">
						<div className="question-count  text-center">
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className = "question-text text-center question">{questions[currentQuestion].questionText}</div>
					</div>
					<div className="answer-section text-center answer ">
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button className="quizbtn ml-5" onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</div>
			)}
		</div>
	);
}
