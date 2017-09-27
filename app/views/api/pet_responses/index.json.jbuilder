@pet_responses.each do |pet_response|
  json.set! pet_response.id do
    json.partial! 'api/pet_responses/pet_response', pet_response: pet_response
  end
end
