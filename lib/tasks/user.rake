require "pry"
namespace :user do

	desc "remake database data"
  task :print_info, [:username] => :environment do |task,args|
  	puts args[:username]
  	binding.pry
   	usernames =args[:username].split(";")
   	# User.where(:name => usernames)
   	#users = User.where("name in (?)", usernames)
   	
   	users =User.SELECT (user, email)*where name = usernames
   	users.each do |user| 
   		puts user.name +"|" + user.email
   end
end
   task hello: :environment do
   	puts "Hello!!!"
   end	
   task ask: :hello do
   		puts "..."
   end
 end
