module.exports = {
  async addRestaurant(ctx) {
    try {
      ctx.response.status = 200;
      ctx.body = {
        success: true,
        status: 200,
        statusMessages: [
          'Successfully added a restaurant',
        ],
      };
    } catch (err) {
      console.error(err);
      ctx.response.status = 500;
      ctx.body = {
        success: false,
        status: 500,
        statusMessages: [
          'Internal server error',
        ],
      };
    }
  },
  async fetchRestaurants(ctx) {
    try {
      ctx.response.status = 200;
      ctx.body = {
        success: true,
        status: 200,
        statusMessages: [
          'Successfully fetch all restaurants',
        ],
      };
    } catch (err) {
      console.error(err);
      ctx.response.status = 500;
      ctx.body = {
        success: false,
        status: 500,
        statusMessages: [
          'Internal server error',
        ],
      };
    }
  },
  async fetchRestaurantDetails(ctx) {
    try {
      ctx.response.status = 200;
      ctx.body = {
        success: true,
        status: 200,
        statusMessages: [
          'Successfully fetched restaurant details',
        ],
      };
    } catch (err) {
      console.error(err);
      ctx.response.status = 500;
      ctx.body = {
        success: false,
        status: 500,
        statusMessages: [
          'Internal server error',
        ],
      };
    }
  },
  async updateRestaurant(ctx) {
    try {
      ctx.response.status = 200;
      ctx.body = {
        success: true,
        status: 200,
        statusMessages: [
          'Successfully updated restaurant',
        ],
      };
    } catch (err) {
      console.error(err);
      ctx.response.status = 500;
      ctx.body = {
        success: false,
        status: 500,
        statusMessages: [
          'Internal server error',
        ],
      };
    }
  },
  async deleteRestaurant(ctx) {
    try {
      ctx.response.status = 200;
      ctx.body = {
        success: true,
        status: 200,
        statusMessages: [
          'Successfully deleted restaurant',
        ],
      };
    } catch (err) {
      console.error(err);
      ctx.response.status = 500;
      ctx.body = {
        success: false,
        status: 500,
        statusMessages: [
          'Internal server error',
        ],
      };
    }
  },
};
