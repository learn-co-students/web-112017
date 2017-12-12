class BooksController < ApplicationController



  # when  user goes to /books show that user all books


  # INDEX
  get "/books" do
    # Well I need all the books
    @books = Book.all
    erb :"books/index"
  end





  # our controllers care about order
  # order matters
  # IF we have specific routes they should go on top


  get "/books/new" do # I want to create a book
    # no db here
    erb :"books/new" # show a form
  end

  post "/books" do
    # params -> { name: Musketeers}
    @book = Book.create(params)


    erb :"books/create"
    redirect "/books/#{@book.id}"
  end


  # SHOW
  get "/books/:id" do # I wanted the book at this id
    @book = Book.find(params[:id]) # go ask db about book at id
    erb :"books/show" # show book at id
  end




  get "/books/:id/edit" do # I want to edit this book
    @book = Book.find(params[:id]) # go ask db about book at id
    erb :"/books/edit"
  end








end
