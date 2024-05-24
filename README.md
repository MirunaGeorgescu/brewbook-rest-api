# Brewbook ☕

Brewbook is a REST API develeoped for a Application Development with Node.js course. The project is a social media appication designed for coffee enthusiasts where users can browse cafes, their products and share reviews with thoughts about their experience. The platform supports three different types of users, each with their own permissions. 

## Key Features
- **Explore Cafes**: Look through all the cafes in the database each with a detailed description and the address where you can find it.
- **Browse Products**: Discover what products the cafes have to offer and check out the descriptions and prices.
- **Leave Reviews**: Tell other people what yoy thought of the products you tried, leave a rating and a comment.

## User Roles 
- **Users:** People can create an account and become users, then they can view all the cafes, products and reviews on the app.
- **Editors:** Editors can update and/ or delete the cafes, products and reviews.
- **Admins:** Admins can do anything an editor can do and also add cafes and products to the database. 

## Database 
When it comes to the database, Brewbook uses s Sequelize as its ORM to interact with the database. The database schema contains the tables for cafes, products, reviews and users. The diagram can be found below: 

![Brewbook Diagram](https://github.com/MirunaGeorgescu/brewbook-rest-api/assets/93542009/f547644d-0041-4807-8e56-9d3438616a55)

## App Flow 
A user starts by logging in or signing up. Once logged in the user can browse the cafes, see what products they offer or read/ write reviews. 

![Blank diagram (1)](https://github.com/MirunaGeorgescu/brewbook-rest-api/assets/93542009/af3a3cee-b114-4634-b986-6a65aa395a00)

