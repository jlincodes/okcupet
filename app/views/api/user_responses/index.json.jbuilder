@user_responses.each do |user_response|
  json.set! user_response.id do
    json.partial! 'api/user_responses/user_response', user_response: user_response
  end
end
