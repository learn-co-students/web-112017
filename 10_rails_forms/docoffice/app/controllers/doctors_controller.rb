class DoctorsController < ApplicationController 
  
  def index
    @doctors = Doctor.all
  end 
  
  
  def show
    @doctor = Doctor.find(params[:id])
  end
  
  
  def new
    @doctor = Doctor.new
  end 
  
  def create
    byebug
    @doctor = Doctor.new(doctor_params)
    if @doctor.valid? 
      @doctor.save 
      redirect_to doctor_path(@doctor)
    else 
      # Explicit Render
      #render 'new'
      redirect_to new_doctor_path
    end
  end 
  
  
  def edit 
  end
  
  def update
  end 
  
  
  
  
  private 
  
  def doctor_params
    params.require(:doctor).permit(:name, :speciality, :registration_number)
  end
  
  
  
end