class PatientsController < ApplicationController
  def index
    @patients = Patient.all
  end
  
  
  def show 
    @patient = Patient.find(params[:id])
  end

  def new
    @patient = Patient.new
  end

  def create
    byebug
    
    @patient = Patient.create(patient_params)
    redirect_to patient_path(@patient)
  end
  
  
  def patient_params
    params.require(:patient).permit(:name, :condition, :doctor_id)
  end
end
