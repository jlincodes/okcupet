# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all

User.create!(username: 'guest', password: 'password', email: "fakeemail0@email.com", organization: false, img_url: "", location: "San Francisco", summary: "Demo login")
User.create!(username: 'Daenerys Stormborn', password: 'password', email: 'dany@email.com', organization: true, img_url: "https://vignette.wikia.nocookie.net/gameofthrones/images/0/0d/The_Gift_09.jpg/revision/latest?cb=20150528195556", location: "San Francisco", summary: "I am Daenerys Stormborn of House Targaryen, of the blood of Old Valyria! I am the dragon's daughter, and I swear to you that those who would harm you will die screaming!")
User.create!(username: 'Julie', password: 'password', email: 'julie@email.com', organization: true, img_url: "https://68.media.tumblr.com/b5b053b07750a797db50db98bf8956ac/tumblr_ogsku0OWnc1vl94c7o7_1280.jpg", location: "San Francisco", summary: "I like all the animals.")

Pet.destroy_all

# user_ids = User.all.map { |user| user.id }

Pet.create!(name: "Drogon", animal_type: "dragon", age: 1, img_url: "https://vignette.wikia.nocookie.net/gameofthrones/images/0/00/Drogon_2x10.jpg/revision/latest?cb=20160726064359", location: "Westeros", user_id: 2, summary: "Cute but dangerous. Doesn't like raw meat; only meat cooked in the fire that I breath.")
Pet.create!(name: "Rhaegal", animal_type: "dragon", age: 1, img_url: "https://vignette.wikia.nocookie.net/gameofthrones/images/c/c4/Rhaegal_1x10.jpg/revision/latest?cb=20160720030915", location: "Westeros", user_id: 2, summary: "Cute but dangerous. Doesn't like raw meat; only meat cooked in the fire that I breath.")
Pet.create!(name: "Viserion", animal_type: "dragon", age: 1, img_url: "https://vignette.wikia.nocookie.net/gameofthrones/images/d/d5/Viserion_2x10.jpg/revision/latest?cb=20160720030947", location: "Westeros", user_id: 2, summary: "Cute but dangerous. Doesn't like raw meat; only meat cooked in the fire that I breath.")
Pet.create!(name: "Rick", animal_type: "cat", age: 5, img_url: "http://www.catster.com/wp-content/uploads/2014/08/An-albino-cat.jpg", location: "San Francisco", user_id: 3, summary: "Weddings are basically funerals with cake. I turned myself into a pickle. I'm Pickle Riiiiick.")
Pet.create!(name: "Morty", animal_type: "cat", age: 1, img_url: "https://vignette.wikia.nocookie.net/animal-jam-clans-1/images/a/a3/324536-cats-brown-kitten.jpg/revision/latest?cb=20161127015136", location: "San Francisco", user_id: 3, summary: "Nobody exists on purpose. Nobody belongs anywhere. We're all going to die.")
Pet.create!(name: "Summer", animal_type: "cat", age: 2, img_url: "https://vignette2.wikia.nocookie.net/animal-jam-clans-1/images/2/22/Cute-Light-Brown-Cat-1920x1200.jpg/revision/latest?cb=20161204235438", location: "San Francisco", user_id: 3, summary: "Boo-ya.")
Pet.create!(name: "Ghost", animal_type: "dire wolf", age: 7, img_url: "https://i.pinimg.com/originals/0c/92/0d/0c920d58b210a74a75868df885160a5f.jpg", location: "Westeros", user_id: 3, summary: "*growl*")
Pet.create!(name: "Nymeria", animal_type: "dog", age: 7, img_url: "https://pixel.nymag.com/imgs/vulture/slideshows/2015/06/game-of-thrones-missing-characters/nymeria.w710.h473.jpg", location: "Westeros", user_id: 3, summary: "*growl*")
Pet.create!(name: "Sterling Archer", animal_type: "dog", age: 4, img_url: "https://vetstreet.brightspotcdn.com/dims4/default/3e7dd32/2147483647/crop/0x0%2B0%2B0/resize/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F8d%2Ffa82f0a80611e0a0d50050568d634f%2Ffile%2FSiberian-Husky-2-645mk062811.jpg", location: "San Francisco", user_id: 3, summary: "Phrasing! Something, something, DANGER ZONE! LANA!")
Pet.create!(name: "Lana Kane", animal_type: "dog", age: 4, img_url: "https://i.ytimg.com/vi/oGoPUw0YBAg/maxresdefault.jpg", location: "San Francisco", user_id: 3, summary: "I don’t need a baby to validate my existence.")
