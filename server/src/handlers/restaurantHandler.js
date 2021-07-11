import db from '../models/index.js';

const restaurantModel = new db.RestaurantModel();

export default {
  async addRestaurant(ctx) {
    try {
      const { name, location } = ctx.request.body;
      const params = [name, location];
      const restaurant = await restaurantModel.addNewRestaurant(params);
      ctx.response.status = 200;
      ctx.body = {
        success: true,
        status: 200,
        data: {
          restaurant,
        },
        statusMessages: ['Successfully added a new restaurant'],
      };
    } catch (err) {
      console.error(err);
      ctx.response.status = 500;
      ctx.body = {
        success: false,
        status: 500,
        statusMessages: ['Internal server error'],
      };
    }
  },
  async getAllRestaurants(ctx) {
    try {
      const { limit = 10, skip = 0 } = ctx.request.query;
      const params = [limit, skip];
      const restaurants = await restaurantModel.getAllRestaurants(params);
      ctx.response.status = 200;
      ctx.body = {
        success: true,
        status: 200,
        data: {
          restaurants,
        },
        statusMessages: ['Successfully fetched all restaurants'],
      };
    } catch (err) {
      console.error(err);
      ctx.response.status = 500;
      ctx.body = {
        success: false,
        status: 500,
        statusMessages: ['Internal server error'],
      };
    }
  },
  async getRestaurantInfo(ctx) {
    try {
      const id = ctx.request.params;
      const params = [id];
      const restaurant = await restaurantModel.getRestaurant(params);
      ctx.response.status = 200;
      ctx.body = {
        success: true,
        status: 200,
        data: {
          restaurant,
        },
        statusMessages: ['Successfully fetched restaurant info'],
      };
    } catch (err) {
      console.error(err);
      ctx.response.status = 500;
      ctx.body = {
        success: false,
        status: 500,
        statusMessages: ['Internal server error'],
      };
    }
  },
  async updateRestaurantInfo(ctx) {
    try {
      const id = ctx.request.params;
      const params = [id];
      const restaurant = await restaurantModel.updateRestaurant(params);
      ctx.response.status = 200;
      ctx.body = {
        success: true,
        status: 200,
        data: {
          restaurant,
        },
        statusMessages: ['Successfully updated restaurant info'],
      };
    } catch (err) {
      console.error(err);
      ctx.response.status = 500;
      ctx.body = {
        success: false,
        status: 500,
        statusMessages: ['Internal server error'],
      };
    }
  },
  async deleteRestaurant(ctx) {
    try {
      const id = ctx.request.params;
      const params = [id];
      const restaurant = await restaurantModel.deleteRestaurant(params);
      ctx.response.status = 200;
      ctx.body = {
        success: true,
        status: 200,
        data: {
          restaurant,
        },
        statusMessages: ['Successfully deleted a restaurant'],
      };
    } catch (err) {
      console.error(err);
      ctx.response.status = 500;
      ctx.body = {
        success: false,
        status: 500,
        statusMessages: ['Internal server error'],
      };
    }
  },
};
