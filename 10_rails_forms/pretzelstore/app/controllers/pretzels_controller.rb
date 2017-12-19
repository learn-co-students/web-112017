class PretzelsController < ApplicationController

  def index
    @pretzels = Pretzel.all
  end

  def show
    @pretzel = Pretzel.find(params[:id])
  end

  def new
    @pretzel = Pretzel.new
  end

  def create
    @pretzel = Pretzel.new(pretzel_params)

    if @pretzel.valid? #you can also say @pretzel.save
      @pretzel.save
      redirect_to pretzel_path(@pretzel)
    else
      flash[:error] = @pretzel.errors.full_messages
      # flash[:notice]
      # flash[:alert]
      redirect_to new_pretzel_path
    end
  end


  private
  def pretzel_params #(*args)
    #params.require(:pretzel).permit(*args)
    params.require(:pretzel).permit(:name, :flavor, :price)
  end
end
