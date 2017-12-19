class PetsController < ApplicationController


  def index
    @pets = Pet.all
    # IMPLICIT RENDER
  end

  def show
    @pet = Pet.find(params[:id])
  end

  def new
    @pet = Pet.new
  end


  def create
    @pet = Pet.new(name: params[:pet][:name])
    if @pet.save

      redirect_to pet_path(@pet)
      # SAVING A PET WAS SUCCESSFUL
    else
      # WHAT SHOULD I DO IF I COULDNT ADD A PET TO OUR PETSTORE
      # BECAUSE THE PET WAS HAPPY THERE
    end
  end

  def edit
    @pet = Pet.find(params[:id])
  end



end
