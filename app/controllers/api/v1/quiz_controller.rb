class Api::V1::QuizController < Api::V1::BaseController
	def index
		respond_with Questions.select("id, content, answer").order("RANDOM()").limit(1)
	end
	
	def update
		@answer = check_anwer(Questions.find(params[:id]), params[:answer])
		respond_with @answer, json: @answer
	end

	private 
		def set_question
			@question = Questions.find(params[:id])
		end	

		def check_anwer(question, answer)
			{:correct => replace_number(question[:answer]) == replace_number(answer)}
		end

		def replace_number(str)
			str.to_s.downcase.gsub(/[\d,]*/) {|num| in_words(num.delete(',').to_i).strip}
		end

		def in_words(int)
	      numbers_to_name = {
	          1000000 => "million",
	          1000 => "thousand",
	          100 => "hundred",
	          90 => "ninety",
	          80 => "eighty",
	          70 => "seventy",
	          60 => "sixty",
	          50 => "fifty",
	          40 => "forty",
	          30 => "thirty",
	          20 => "twenty",
	          19=>"nineteen",
	          18=>"eighteen",
	          17=>"seventeen",
	          16=>"sixteen",
	          15=>"fifteen",
	          14=>"fourteen",
	          13=>"thirteen",
	          12=>"twelve",
	          11 => "eleven",
	          10 => "ten",
	          9 => "nine",
	          8 => "eight",
	          7 => "seven",
	          6 => "six",
	          5 => "five",
	          4 => "four",
	          3 => "three",
	          2 => "two",
	          1 => "one"
	        }
	      str = ""
	      numbers_to_name.each do |num, name|
	        if int == 0
	          return str
	        elsif int.to_s.length == 1 && int/num > 0
	          return str + "#{name}"
	        elsif int < 100 && int/num > 0
	          return str + "#{name}" if int%num == 0
	          return str + "#{name} " + in_words(int%num)
	        elsif int/num > 0
	          return str + in_words(int/num) + " #{name} " + in_words(int%num)
	        end
	      end
     end

    def quiz_params
      paramspermit(:answer)
    end

end