



class Question extends React.Component{
 render()
		{
			return(

				<div className="question-section text-center">
					<div className="question-count text-center ">
						<span>Question {this.currentQuestion + 1}</span>/{this.props.data.length}
					</div>
					<div className = "question-text text-center question">{this.props.data[this.currentQuestion].questionText}</div>
				</div>
			);
		}

	}
