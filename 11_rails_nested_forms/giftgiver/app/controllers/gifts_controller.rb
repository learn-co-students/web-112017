class GiftsController < ApplicationController

  def index
    @gifts = Gift.all
  end


  def show
    @gift = Gift.find(params[:id])
  end


  def new
    @gift = Gift.new
  end


  def create
    @gift = Gift.new(gift_params)
    if @gift.valid?
      @gift.save
      redirect_to gift_path(@gift)
    else
      flash[:error] = @gift.errors.full_messages
      redirect_to new_gift_path
    end
  end

  def edit
    @gift = Gift.find(params[:id])
  end


  def update
    @gift = Gift.find(params[:id])
    if @gift.update(gift_params)
      redirect_to gift_path(@gift)
    else
      flash[:error] = @gift.errors.full_messages
      redirect_to edit_gift_path(@gift)
    end
  end


  private
    def gift_params
      params.require(:gift).permit(:product_name, :description)
    end
end
