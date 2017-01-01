class Api::V1::QuestionsController < Api::V1::BaseController
	def index
		respond_with Questions.all
	end

	def create 
		respond_with :api, :v1, Questions.create(question_params)
	end

	def destroy
		respond_with Questions.destroy(params[:id])
	end

	def update 
		question = Questions.find(params["id"])
		question.update_attributes(question_params)
		respond_with question, json: question
	end

	private

	def question_params
		params.require(:question).permit(:id, :content, :answer)
	end


end
