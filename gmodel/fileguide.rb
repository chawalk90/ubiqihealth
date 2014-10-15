
#this stuff goes in controllers

def [method_name]
	#do some stuff here
end




#this goes in routes.rb
get "/users", to: "user#index"

resources :users



#these are in /views/[controller_name]

<%= @tweets.each do |tweet| %>
	<span> tweet.content </span>
<% end %>