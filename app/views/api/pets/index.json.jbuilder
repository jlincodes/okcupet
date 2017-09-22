@pets.each do |pet|
  json.set! pet.id do
    json.partial! 'api/pets/pet', pet: pet
  end
end
