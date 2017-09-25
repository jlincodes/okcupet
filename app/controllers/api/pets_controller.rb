class Api::PetsController < ApplicationController
  def index
    if params[:query]
      @pets = Pet.find_by_location(params[:query])
    # elsif params[:animal_type]
    #   @pets = Pet.find_by_animal_type(params[:animal_type])
    # elsif params[:animal_type] && params[:location]
    #   @pets = find_by_search(params[:animal_type], params[:location])
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

end
