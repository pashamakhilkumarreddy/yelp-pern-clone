import db from '../models/index.js';

const userModel = new db.UserModel();

export default {
  async getUserProfile(ctx) {
    try {
      const { id } = ctx.request.body;
      const params = [id];
      const user = await userModel.getUserDetails(params);
      ctx.response.status = 200;
      ctx.body = {
        success: true,
        status: 200,
        data: { user },
        statusMessages: ['Successfully fetched user details'],
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
  async updateUserProfile(ctx) {
    try {
      const { id } = ctx.request.params;
      const params = [id];
      const user = await userModel.updateUserDetails(params);
      ctx.response.status = 200;
      ctx.body = {
        success: true,
        status: 200,
        data: { user },
        statusMessages: ['Successfully updated user details'],
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
