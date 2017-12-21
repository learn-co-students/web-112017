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
    # WHERE AND WHY?????
    # WHY??????
    @items = Item.all
    @users = User.all
  end

  # /gifts POST
  def create

    @gift = Gift.new(gift_params)


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

      params.require(:gift).permit(:rating, :user_id, :item_id)
    end



end
