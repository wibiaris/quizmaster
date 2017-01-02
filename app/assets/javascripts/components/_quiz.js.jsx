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
				<div className='row' key={quiz.id}>
				<div className='col-sm-6'>
				        <div className="panel panel-primary">
				            <div className="panel-heading">
				              <h3 className="panel-title">Quiz</h3>
				            </div>
				            <div className="panel-body">
				            	<div className="form-group row">
					            	<div className="col-xs-9">
					            		 <h3> {content} ? </h3>
										 <input className="form-control" ref='quiz_id' type="hidden" value={quiz.id}/>
					            	</div>
				            	</div>
				            	<div className="form-group row">
					            	<div className="col-xs-9">
					            		<input className="form-control" ref='answer' placeholder='Enter a answer'/>
					            	</div>
				            	</div>
				            	<div className="form-group row">
					            	<div className="col-xs-9">
					            		<button type="button" onClick={this.handleClick} className="btn btn-sm btn-primary">Submit</button>
					            	</div>	
								</div>	
				            </div>
				         </div>		
				</div>		
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