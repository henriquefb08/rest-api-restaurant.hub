const Restaurant = require("../models/Restaurant.model");
const bcrypt = require("bcryptjs");

class RestaurantRepository {
  constructor(RestaurantModel) {
    this.restaurant = RestaurantModel;
  }

  // (Signup) Create new Restaurant
  create = async (restaurant) => {
    const { name, email, password, categories, description } = restaurant;
    try {
      const restaurant = await this.restaurant.findOne({ email });
      if (restaurant) {
        throw new Error();
      } else {
        const salt = bcrypt.genSaltSync(10);
        const passwordHash = bcrypt.hashSync(password, salt);

        const createdRestaurant = await this.restaurant.create({
          name,
          email,
          passwordHash,
          categories,
          description,
        });

        return createdRestaurant;
      }
    } catch (e) {
      throw new Error();
    }
  };

  // (Login) Restaurant

  findRestaurant = async (email) => {
    try {
      const restaurant = await this.restaurant.findOne({ email });
      return restaurant;
    } catch (e) {
      throw new Error();
    }
  };

  // Edit any Restaurant
  edit = async (id, restaurant) => {
    try {
      const editRestaurant = await this.restaurant.findByIdAndUpdate(
        id,
        restaurant,
        { new: true }
      );
      return editRestaurant;
    } catch (error) {
      throw new Error();
    }
  };

  // list Restaurants

  list = async () => {
    try {
      const restaurants = await this.restaurant.find();

      return restaurants;
    } catch (error) {
      throw new Error();
    }
  };
  // Remove a restaurant account

  removeRest = async (id) => {
    try {
      const specificRest = await this.restaurant.findByIdAndRemove(id);
      return specificRest;
    } catch (error) {
      throw new Error();
    }
  };

    //List a specific restaurant

    listOne = async (id) => {
      try {
        const rest = await this.restaurant.findById(id);
        return rest;
      } catch (error) {
        throw new Error();
      }
    };


// List orders in a rest

  listOrdersRest = async (id) => {
    try {
      const rest = await this.restaurant.findById(id).populate({path:'orders'});
     // const rest = await this.restaurant.findById(id).populate({path:'orders', populate:{path:'item_id'} });
      return rest;
    } catch (error) {
      throw new Error();
    }
  };

 //List a specific restaurant

 listOne = async (id) => {
  try {
    const rest = await this.restaurant.findById(id);
    return rest;
  } catch (error) {
    throw new Error();
  }
};



}

module.exports = new RestaurantRepository(Restaurant);
