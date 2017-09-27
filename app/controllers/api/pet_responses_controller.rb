class Api::PetResponsesController < ApplicationController
  def index
    @pet_responses = PetResponse.all
  end

  def show
    @pet_response = PetResponse.find(params[:id])
  end
end
