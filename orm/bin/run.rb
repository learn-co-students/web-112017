#!/usr/bin/env ruby
require_relative '../config/environment'
puts Author.last.name
Post.all.each do |post|
  puts post.content
end
  