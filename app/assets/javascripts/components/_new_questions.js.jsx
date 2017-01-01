var NewQuestion = React.createClass({
	handleClick(){
		var content = this.refs.content.value;
		var answer = this.refs.answer.value;
		$.ajax({
			url: '/api/v1/questions',
			type: 'POST',
			data: {question: {content: content, answer: answer }},
			success: (question ) => {
				this.props.handleSubmit(question)
			}
		});
	},

	render() {
		return (
			<div>
				<input ref='content' placeholder='Enter content of the question' />
				<input ref='answer' placeholder='Enter a answer'/>
				<button onClick={this.handleClick}> Submit </button>
			</div>
		)
	}
});