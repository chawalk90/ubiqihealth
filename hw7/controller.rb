class WelcomeController < ApplicationController

def index
end

def about
end

end

class CreateTweets < ActiveRecord:Migration
def change
create_table :tweets do |t|
t.string :username
t.string :content

t. timestamps