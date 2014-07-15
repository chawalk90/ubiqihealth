rails new [finalproj]

#scaffolds a new model
rails g scaffold [MyApp] attribute:datatype,
attribute:datatype


# check all the routes that are available
rake routes

#run all migrations on your database
rake db:migrate

#open the rails console
rails c

#start your server
rails s