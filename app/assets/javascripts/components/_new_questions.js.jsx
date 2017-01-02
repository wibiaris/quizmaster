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
			<div className='row'>
				<div className='col-sm-6'>
				        <div className="panel panel-primary">
				            <div className="panel-heading">
				              <h3 className="panel-title">Input Question</h3>
				            </div>
				            <div className="panel-body">

				            	<div className="form-group row">
					            	<div className="col-xs-9">
					            		 <input className="form-control" ref='content' placeholder='Enter content of the question' />
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
	}
});