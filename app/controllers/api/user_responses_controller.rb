class Api::UserResponsesController < ApplicationController
  def index
    @user_responses = UserResponse.all
  end

  def show
    @user_response = UserResponse.find(params[:id])
  end
end
