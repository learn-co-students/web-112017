class Api::V1::PaintingsController < ApplicationController

  def index
    user = current_user
    if user
      @paintings = Painting.all
    else
      @paintings = [ Painting.all.sample() ]
    end
    render json: @paintings
  end

  def show
    @painting = Painting.find_by(slug: params[:slug])
    render json: @painting
  end


end
