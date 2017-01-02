var Quiz = React.createClass({
	getInitialState() {
		return { quiz: [] }
	},
	componentDidMount() {
		$.getJSON('api/v1/quiz.json', (response) => {this.setState({quiz: response}) });
	},

	onUpdate(quiz) {

	},

	handleClick(quiz){
		var answer = this.refs.answer.value;
		var quiz_id = this.refs.quiz_id.value;
		$.ajax({
			 url: `/api/v1/quiz/${quiz_id}`,
			 type: 'PUT',
			 data: {answer: answer},
			 success: (result) => {
			 	alert(result.correct);
			 }
		});
	},

	render() {
		var quiz = this.state.quiz.map((quiz) => {
			var content = quiz.content;
			return (
				<div key={quiz.id}>
					{content}
					<input ref='quiz_id' type="hidden" value={quiz.id}/>
					<input ref='answer' placeholder='Enter a answer'/>
					<button onClick={this.handleClick}> Submit </button>
				</div>
			)
		});

		return (
			<div>
				{quiz}
			</div>
		)
	}

});