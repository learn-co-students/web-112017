class UsersController < ApplicationController


  # /users GET
  def index
    @users = User.all
  end


  # /users/:id GET
  def show
    @user = User.find(params[:id])
  end


  # /users/new GET
  def new
    @user = User.new
  end

  # /users POST
  def create
    @user = User.new(user_params)

    if @user.valid?
      @user.save
      redirect_to user_path(@user)
    else
      # Tell the user what they did wrong
      flash[:error] = @user.errors.full_messages
      redirect_to new_user_path
    end

    # double check if user works and if it doesnt do something else


  end

  # users/:id/edit GET
  def edit
    @user = User.find(params[:id])
  end

  # users/:id PATCH
  def update
    byebug
  end


  private
    def user_params
      params.require(:user).permit(:username)
    end



end
