# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

User.create({ username: 'drogon', password: 'password',
  email: "drogon123@email.com", organization: false,
  img_url: "https://vignette.wikia.nocookie.net/gameofthrones/images/0/00/Drogon_2x10.jpg/revision/latest/scale-to-width-down/603?cb=20160726064359",
  location: "San Francisco", summary: "cute but dangerous" })

User.create({ username: 'rhaegal', password: 'password',
  email: "rhaegal123@email.com", organization: false,
  img_url: "https://vignette.wikia.nocookie.net/gameofthrones/images/c/c4/Rhaegal_1x10.jpg/revision/latest?cb=20160720030915",
  location: "San Francisco", summary: "cute but dangerous" })

User.create({ username: 'viserion', password: 'password',
  email: "viserion123@email.com", organization: false,
  img_url: "https://vignette.wikia.nocookie.net/gameofthrones/images/d/d5/Viserion_2x10.jpg/revision/latest/scale-to-width-down/170?cb=20160720030947",
  location: "San Francisco", summary: "cute but dangerous" })

Pet.destroy_all

Pet.create!(name: "breakfast", animal_type: "cat", age: 1, img_url: "http://placekitten.com/200/200", location: "San Francisco", user_id: 1)
Pet.create(name: "markov", animal_type: "cat", age: 1, img_url: "http://placekitten.com/200/200", location: "San Francisco", user_id: 2)
Pet.create(name: "jeff", animal_type: "cat", age: 1, img_url: "http://placekitten.com/200/200", location: "San Francisco", user_id: 3)
