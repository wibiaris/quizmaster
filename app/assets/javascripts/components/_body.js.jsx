var Body = React.createClass({
	getInitialState() {
		return { questions: [] }
	},
	componentDidMount() {
		$.getJSON('api/v1/questions.json', (response) => { this.setState({ questions: response }) });
	},

	handleSubmit(question) {
		var newState = this.state.questions.concat(question);
		this.setState({ questions: newState })
	},

	handleDelete(id){
		$.ajax({
			url: `/api/v1/questions/${id}`,
   			type: 'DELETE',
			success:() => {
				this.removeQuestionClient(id);
			}
		})
	},


	removeQuestionClient(id) {
		var newQuestion = this.state.questions.filter((question) => {
			return question.id != id;
		});
		this.setState({ questions: newQuestion });
	},

	handleUpdate(question) {
		$.ajax({
			url: `/api/v1/questions/${question.id}`,
			type: 'PUT',
			data: { question: question },
			success: () => {
				this.updateQuestion(question);
			}
		})
	},
	
	updateQuestion(question) {
		var questions = this.state.questions.filter((i) => { return i.id != question.id });
		questions.push(question);

		this.setState({questions: questions });
	},

	render() {
			return (
				<div className="container">
					<div id="content"> <NewQuestion handleSubmit={this.handleSubmit}/> </div>
					<div id="content"> <AllQuestions questions={this.state.questions} handleDelete={this.handleDelete} onUpdate={this.handleUpdate}/></div>
					<div id="content"><Quiz/></div>
				</div>

			)
	}
});