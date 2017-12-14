require 'open-uri'
require 'json'
require 'pry'
require 'faker'


Book.destroy_all
Author.destroy_all


5.times do
  Author.create(name: Faker::Name.name)
end

25.times do
  Book.create(name: Faker::Book.title, description: Faker::ChuckNorris.fact, author: Author.all.sample)
end

# URL = "https://www.googleapis.com/books/v1/volumes?q=subject:fiction&maxResults=40"
#
# response = open(URL).read
# books = JSON.parse(response)
#
# books['items'].each do |item|
#   book = Book.new
#   book.name = item["volumeInfo"]["title"]
#   book.description = item["volumeInfo"]["description"]
#   book.save
# end


# Faker::Book.title #=> "The Odd Sister"
# Faker::Book.author #=> "Alysha Olsen"
# Faker::ChuckNorris.fact
