#our user model

$ rails g model user notes:references

class User < ActiveRecord::Base 
	has_many :tweets
end

class Tweets < ActiveRecord::Base
belongs_to :tweets
end

User.create(name: "?", gender: false) <!---check again--->