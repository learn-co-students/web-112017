class UsersController < ApplicationController
  skip_before_action :authorized, only: [:new, :create]

  def index
    @user = User.all
  end

  def new
    @user = User.new
  end

  def show
    if logged_in?
      flash[:msg] = "Welcome #{current_user.username}"
    else
    end
    @user = User.find(params[:id])
  end

  def create
    @user = User.new(user_params)
    if @user.valid?
      @user.save
      session[:user_id] = @user.id
      redirect_to user_path(@user)
    else
      flash[:error] = @user.errors.full_messages
      redirect_to new_user_path
    end
  end


  def user_params
    params.require(:user).permit(:username, :password, :password_confirmation)
  end
end
