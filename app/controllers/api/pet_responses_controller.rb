class Api::PetResponsesController < ApplicationController
  def index
    @pet_responses = PetResponse.where(pet_id: pet_response_params[:pet_id])
  end

  def show
    @pet_response = PetResponse.find(params[:id])
  end

  private

  def pet_response_params
    params.require(:pet_response).permit(:body, :question_id, :pet_id)
  end
end
