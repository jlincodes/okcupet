class Api::MessagesController < ApplicationController
  # def index  # do I need?
  # end
  #
  # def show
  # end

  def create
    @message = Message.new(message_params)
    if @message.save!
      render :show
    else
      render json: @message.errors.full_messages, status: 422
    end
  end

  private

  def message_params
    params.require(:message).permit(:author_id, :conversation_id, :body)
  end
end
