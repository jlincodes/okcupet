class Api::PetsController < ApplicationController
  def index
    if params[:query]
      @pets = Pet.find_by_animal_type(params[:query])
      @pets = Pet.find_by_location(params[:query])
    else
      @pets = Pet.all
    end
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

  def search_params
    params.require(:search).permit(:query)
  end
end
