class User
		attr_accessor :first_name , :last_name , :username, :email
		MAX_LOGINS = 5

		def initialize (first_name, last_name, username, email)
			@first_name = first_name
			@last_name = last_name
			@username = username
			@email = email

				if @first_name = nil || @last_name = nil || @username = nil || email = nil
				return " missing information "
		end

			def full_name
				return "@first_name" + "@last_name"}
		end

			def login
				if (x < MAX_LOGINS) {
					@login_count = 0
					@login_count += 1
					return true
				} elsif (x >= 5) {
					return false
					@locked = true;
				}
		end
		
class InputForm
	def initialize (first_name, last_name, username, email)
			[:first_name] = first_name
			[:last_name] = last_name
			[:username] = username
			[:email] = email
		end
	end
	private
	
	User = InputForm.new(@first_name, @last_name, @username, @email)
	File.basename("input_form.rb")
	return first_name.new
	return last_name.new
	return username.new
	return email.new

	def create_user (first_name, last_name, username, email)
		person = User.new (first_name, last_name, username, email)
		return person
	end
	private

	def submit
		create_user (@first_name, @last_name, @username, @email)
	end
	public

	def full_name
			@user = full_name
	end