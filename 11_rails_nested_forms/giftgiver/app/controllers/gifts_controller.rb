class GiftsController < ApplicationController


  # /gifts GET
  def index
    @gifts = Gift.all
  end


  # /gifts/:id GET
  def show
    @gift = Gift.find(params[:id])
  end


  # /gifts/new GET
  def new
    @gift = Gift.new
    @users = User.all
  end

  # /gifts POST
  def create
    # implicit rendering
    # VIEW THAT MATCHES THE METHOD OR ACTION NAME
    # explicit rendering
    # tell me exactly what view you want



    # One of two things might happen

    # 1 A user might create a gift and select a user

    # 2. A user might create a gift and also create a user


    if params[:gift][:user_name] != ""
      # if params user_name is not blank
      # I must create a gift and also create a user
      # to find or create User.find_or_create_by(username: )
      @user = User.find_or_create_by(username: params[:gift][:user_name])
      @gift = Gift.new(name: params[:gift][:name], description: params[:gift][:description], rating: params[:gift][:rating], user:@user)
    else
      @gift = Gift.new(gift_params)
      # I must create a gift and assign an existing user
    end

    if @gift.valid?
      @gift.save
      redirect_to gift_path(@gift)
    else
      # Tell the gift what they did wrong
      flash[:error] = @gift.errors.full_messages
      redirect_to new_gift_path
    end    
    # double check if gift works and if it doesnt do something else
  end

  # gifts/:id/edit GET
  def edit
    @gift = User.find(params[:id])
  end

  # gifts/:id PATCH
  def update
    byebug
  end


  private
    def gift_params

      params.require(:gift).permit(:name, :rating, :description, :user_id)
    end



end
