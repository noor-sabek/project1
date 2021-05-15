
class Answer extends React.Component
{
	render()
  {
		const handleAnswerOptionClick = (handle) => {
			if (this.props.data.answerOptions) {
				this.setScore= this.score + 1;
			}}
		return(

				<div className="answer-section text-center answer">

					{this.props.data[this.currentQuestion].answerOptions.map((answerOption) => (
						<button  className="quizbtn ml-5"
						onClick=
						{ () => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
					))}
				</div>
   );
  }
}
