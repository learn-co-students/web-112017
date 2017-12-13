require 'open-uri'
require 'json'
require 'pry'

URL = "https://www.googleapis.com/books/v1/volumes?q=subject:fiction&maxResults=40"

response = open(URL).read
books = JSON.parse(response)

books['items'].each do |item|
  book = Book.new
  book.name = item["volumeInfo"]["title"]
  book.description = item["volumeInfo"]["description"]
  book.save
end
