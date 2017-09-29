# What is OKCupet?

Have you ever considered adopting a pet and been overwhelmed by the sheer number of pets available for adoption? Or maybe you've felt underwhelmed by the lack of information on said adoptable pets. Enter [OKCupet](https://okcupet.herokuapp.com/#/).

OKCupet is a full-stack web application inspired by OKCupid with a sole purpose of matching potential pet parents with adoptable pets.

![OKCupet Splash Page][splashpage]


## Features

- User accounts with secure authentication
- Browse pet profiles by location
- User and pet questions to determine match compatibility
- Message a pet's owner to inquire about adoption/receive messages from potential pet adopters

### Browse Pet Matches
![Browse][browse]

### User Profile View
![UserProfile][userprofile]

### Pet Profile View
![PetProfile][petprofile]

### Messages View
![Messaging][messaging]

### Message View
![Message][message]


## Technology

OKCupet runs on Ruby on Rails for its backend and utilizes React.js for its frontend components. It is currently hosted on Heroku, but it will later be hosted on it's own domain. All of the site's data is stored on a PostgreSQL database. User passwords are encrypted with BCrypt.


## Future direction

Currently, OKCupet is only a minimum viable product. To make OKCupet a fully functioning web application for pet adopters and organizations seeking to adopt out their never-ending influx of adoptable pets, the following features would need to be implemented:
- Pet profile creation button for user profiles belonging to organizations
- Notifications for new and/or unread messages
- Editing/deleting question responses
- Additional pet filtering parameters

[splashpage]: https://github.com/julielin0812/okcupet/blob/master/docs/screenshots/splash-page-signup.png?raw=true
[browse]: https://github.com/julielin0812/okcupet/blob/master/docs/screenshots/browse-pets.png?raw=true
[petprofile]: https://github.com/julielin0812/okcupet/blob/master/docs/screenshots/pet-profile.png?raw=true
[userprofile]: https://github.com/julielin0812/okcupet/blob/master/docs/screenshots/user-profile.png?raw=true
[messaging]: https://github.com/julielin0812/okcupet/blob/master/docs/screenshots/messages.png?raw=true
[message]: https://github.com/julielin0812/okcupet/blob/master/docs/screenshots/message.png?raw=true
