class AuthorsController < ApplicationController


  # INDEX /authors GET
  # GET SELECT * FROM authors


  get "/authors" do
    @authors = Author.all
    erb :"authors/index"
  end


  # NEW -> Show a form GET
  # /authors/new


  get "/authors/new" do
    erb :"authors/new"
  end

  # SHOW /authors/:id GET
  # SELECT * FROM authors WHERE id = :id


  get "/authors/:id" do
    @author = Author.find(params[:id])
    erb :"authors/show"
  end



  # CREATE  /authors POST
  # INSERT INTO authors (name) VALUES (beef)


  post "/authors" do
    @author = Author.create(params[:author])
    redirect "/authors/#{@author.id}"
  end

  # EDIT -> Show a form /authors/:id/edit GET

  # UPDATE /authors/:id PATCH
  # UPDATE authors SET (name) VALUES (beef) WHERE id = :id

  get "/authors/:id/edit" do
    erb :"authors/edit"
  end


  patch "/authors/:id" do
  end


  # DELETE /authors/:id
  # DELETE FROM authors WHERE id = :id;

  delete "/authors/:id" do

  end



end
