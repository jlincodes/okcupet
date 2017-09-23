# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'

User.destroy_all

User.create({ username: 'guest', password: 'password',
  email: "fakeemail0@email.com", organization: false,
  img_url: "", location: "San Francisco", summary: "" })

User.create({ username: Faker::Name.name, password: 'password',
  email: "fakeemail1@email.com", organization: false,
  img_url: "", location: "San Francisco", summary: "" })

User.create({ username: Faker::Name.name, password: 'password',
  email: "fakeemail2@email.com", organization: false,
  img_url: "", location: "San Francisco", summary: "" })

User.create({ username: Faker::Name.name, password: 'password',
  email: "fakeemail3@email.com", organization: false,
  img_url: "", location: "San Francisco", summary: "" })

User.create({ username: Faker::Name.name, password: 'password',
  email: "fakeemail4@email.com", organization: false,
  img_url: "", location: "San Francisco", summary: "" })

User.create({ username: Faker::Name.name, password: 'password',
  email: "fakeemail5@email.com", organization: false,
  img_url: "", location: "San Francisco", summary: "" })

User.create({ username: Faker::Name.name, password: 'password',
  email: "fakeemail6@email.com", organization: false,
  img_url: "", location: "San Francisco", summary: "" })

Pet.destroy_all

user_ids = User.all.map { |user| user.id }

Pet.create(name: Faker::GameOfThrones.character, animal_type: "cat", age: rand(9),
  img_url: "http://skypaws.net/wp-content/uploads/2016/02/kitten.jpg",
  location: "San Francisco", user_id: user_ids[0])
Pet.create(name: Faker::GameOfThrones.character, animal_type: "cat", age: rand(9),
  img_url: "http://skypaws.net/wp-content/uploads/2016/02/kitten.jpg",
  location: "San Francisco", user_id: user_ids[2])
Pet.create(name: Faker::GameOfThrones.dragon, animal_type: "cat", age: rand(9),
  img_url: "http://skypaws.net/wp-content/uploads/2016/02/kitten.jpg",
  location: "San Francisco", user_id: user_ids[1])
Pet.create(name: Faker::RickAndMorty.character, animal_type: "cat", age: rand(9),
  img_url: "http://skypaws.net/wp-content/uploads/2016/02/kitten.jpg",
  location: "San Francisco", user_id: user_ids[2])
Pet.create(name: Faker::RickAndMorty.character, animal_type: "cat", age: rand(9),
  img_url: "http://skypaws.net/wp-content/uploads/2016/02/kitten.jpg",
  location: "San Francisco", user_id: user_ids[3])
Pet.create(name: Faker::RickAndMorty.character, animal_type: "cat", age: rand(9),
  img_url: "http://skypaws.net/wp-content/uploads/2016/02/kitten.jpg",
  location: "San Francisco", user_id: user_ids[4])
Pet.create(name: Faker::GameOfThrones.character, animal_type: "dog", age: rand(9),
  img_url: "https://i.pinimg.com/736x/1e/8a/cd/1e8acd7145614a0de71560220a72e6f3--shiba-puppy-shiba-inu-puppies.jpg",
  location: "San Francisco", user_id: user_ids[0])
Pet.create(name: Faker::GameOfThrones.character, animal_type: "dog", age: rand(9),
  img_url: "https://i.pinimg.com/736x/1e/8a/cd/1e8acd7145614a0de71560220a72e6f3--shiba-puppy-shiba-inu-puppies.jpg",
  location: "San Francisco", user_id: user_ids[2])
Pet.create(name: Faker::GameOfThrones.character, animal_type: "dog", age: rand(9),
  img_url: "https://i.pinimg.com/736x/1e/8a/cd/1e8acd7145614a0de71560220a72e6f3--shiba-puppy-shiba-inu-puppies.jpg",
  location: "San Francisco", user_id: user_ids[1])
Pet.create(name: Faker::RickAndMorty.character, animal_type: "dog", age: rand(9),
  img_url: "https://i.pinimg.com/736x/1e/8a/cd/1e8acd7145614a0de71560220a72e6f3--shiba-puppy-shiba-inu-puppies.jpg",
  location: "San Francisco", user_id: user_ids[2])
Pet.create(name: Faker::RickAndMorty.character, animal_type: "dog", age: rand(9),
  img_url: "https://i.pinimg.com/736x/1e/8a/cd/1e8acd7145614a0de71560220a72e6f3--shiba-puppy-shiba-inu-puppies.jpg",
  location: "San Francisco", user_id: user_ids[3])
Pet.create(name: Faker::RickAndMorty.character, animal_type: "dog", age: rand(9),
  img_url: "https://i.pinimg.com/736x/1e/8a/cd/1e8acd7145614a0de71560220a72e6f3--shiba-puppy-shiba-inu-puppies.jpg",
  location: "San Francisco", user_id: user_ids[4])
