class Api::UserResponsesController < ApplicationController
  def index
    @user_responses = UserResponse.where(user_id: user_response_params[:user_id])
  end

  def show
    @user_response = UserResponse.find(params[:id])
  end

  private

  def user_response_params
    params.require(:user_response).permit(:body, :question_id, :user_id)
  end
end
