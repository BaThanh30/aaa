require "pry"
namespace :user do

	desc "remake database data"
  task :print_info, [:username] => :environment do |task,args|
  	puts args[:username]
  	
   	@usernames =args.username.split(";")
   	# User.where(:name => usernames)
   	#users = User.where("name in (?)", usernames)
   	binding.pry
   	#sql =   "SELECT user, email from users where @usernames"
   	sql1= "select name,email from users where name in (?)"
   	a = User.send(:sanitize_sql,[sql1,@usernames])
   	users = ActiveRecord::Base.connection.exec_query(a)
   	puts"name | email"
   	users.each do |u| 
   		puts u
   end
end
   task hello: :environment do
   	puts "Hello!!!"
   end	
   task ask: :hello do
   		puts "..."
   end
 end
