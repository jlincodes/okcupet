class Api::ConversationsController < ApplicationController
  def index
    @conversations =
      Conversation
        .includes(:messages)
        .includes(:convo_starter)
        .includes(:convo_receiver)
        .where("sender_id = ? OR recipient_id = ?", current_user.id, current_user.id)
        .order(created_at: :desc)
  end

  def show
    @conversation = Conversation.includes(:messages).find(params[:id])
  end

  def create
    @conversation = Conversation.new(conversation_params)
    if @conversation.save!
      render :show
    else
      render json: @conversation.errors.full_messages, status: 422
    end
  end

  # def update
  # end
  #
  # def destroy
  # users should be able to delete a conversation from inbox.. eventually
  # end

  private

  def conversation_params
    params.require(:conversation).permit(:sender_id, :recipient_id, :subject)
  end
end
