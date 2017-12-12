class DoctorsController  < ApplicationController


  # Controller
  get "/doctors" do
    # I PROBABLY WANT TO GET ALL MY DOCTORS  # -> Model
    @doctors = Doctor.all
    erb :'doctors/index'
    # I WANT TO SHOW THOSE DOCTORS # -> View
  end


  get "/doctors/:bacon" do


    binding.pry
  end
end
