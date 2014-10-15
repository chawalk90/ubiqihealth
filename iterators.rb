data = []
 #returns the array
 include module Math
 

 require_relative 'Math'




 { user:
 	{
 		id: "#{n-1}",
 		email: "user_#{n-1}@gmail.com",
 		username: "user_#{n-1}",
 		age:"Random.rand(18..75)"
 	},
 	tweets: [
 		"I'm user #{n-1}",
 		"This is my second tweet!"
 	]
 }

print data[:tweets][2]

user[:]

100.times do data.push(n)
	puts n
end

data.reverse!

data.index(2)
print
	"user_#{n-1} is at index #{n} in the data array"
end

