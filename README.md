### Click [here](https://restaurant-hub.herokuapp.com/) to access **Restaurat.Hub**  :boom: and test the routes of the API


## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)

## General info
This project has the goal to present the knowledge learned on the third module of the Web Development Full Stack - Iron Hack

This API was created with the intention of being used in the latest Full Stack Web Development project. In it we have routes with reference in CRUD. It was created to be used in a mobile application using React.

## Technologies
Project was created with:

* bcryptjs - 2.4.3
 * body-parser - 1.19.0
 * cors - 2.8.5
 * dotenv - 8.2.0
 * express - 4.17.1
 * jsonwebtoken - 8.5.1
  * mongoose - 5.12.3
  * nodemon - 2.0.7

## Setup
To run this project, install it locally using npm:

$ cd ../lorem
$ npm install
$ npm start

### Restaur@nt.Hub API Features
---
### Model
+ Consumer
+ Restaurant
+ Item
+ Order
---
### Repositories and Routes

#### Private
+ Consumer
	+ Route to edit a consumer
	+ Route to delete a consumer
	+ List a specific consumer
+ Restaurant
	+ Route to edit a restaurant
	+ Remove a restaurant
	+ List orders in a restaurant
	+ List a specific restaurant
+ Item
	+ Create item
	+ Edit item
	+ Delete item
+ Order
	+ Route to create new order
	+ Route to edit a order
	+ Route to list all orders of a restaurant

#### Public
+ Consumer
	+ (Signup) Route to create new Consumer
	+ Create route to login to consumer;
+ Restaurant
	+ Route to create new restaurant
	+ Route to login to restaurant
	+ Route to list restaurants
	+ List a specific restaurant
+ Item
	+ List all items of a specific restaurant
	+ List all items
