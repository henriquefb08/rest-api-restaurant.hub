const Restaurant = require("../models/Restaurant.model");

class RestaurantRepository {
  constructor(RestaurantModel) {
    this.restaurant = RestaurantModel;
  }

  // Create new Restaurant
  create = async (newRestaurant) => {
    try {
      const createdRestaurant = await this.restaurant.create(newRestaurant);
      return createdRestaurant;
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
}

module.exports = new RestaurantRepository(Restaurant);
