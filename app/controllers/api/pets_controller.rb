class Api::PetsController < ApplicationController
  def index
    @pets = Pet.all
  end

  def show
    @pet = Pet.find(params[:id])
  end

  def create
    @pet = Pet.new(pet_params)

    if @pet.save
      render :show
    else
      render json: @pet.errors.full_messages, status: 422
    end
  end

  def update
    @pet = Pet.find(params[:id])

    if @pet.update(pet_params)
      render :show
    else
      render json: @pet.errors.full_messages, status: 422
    end
  end

  def destroy
    @pet = Pet.find(params[:id])

    if @pet.destroy
      render :show
    else
      render json: @pet.errors.full_messages, status: 422
    end
  end

  private

  def pet_params
    params.require(:pet).permit(:name, :animal, :age, :img_url, :location, :user_id)
  end
end