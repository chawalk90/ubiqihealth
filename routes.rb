Rails.application.routes.draw do
	resources :tweets

root "welcome#index"

get "about" => "welcome#about"