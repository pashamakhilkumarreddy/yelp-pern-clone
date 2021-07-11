import db from '../models/index.js';

const userModel = new db.UserModel();

export default {
  async register(ctx) {
    try {
      const { email, password } = ctx.request.body;
      const params = [email, password];
      const user = await userModel.addNewUser(params);
      ctx.response.status = 200;
      ctx.body = {
        success: true,
        status: 200,
        data: { user },
        statusMessages: ['Successfully created a new user'],
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
  async login(ctx) {
    try {
      const { email, password } = ctx.request.body;
      const params = [email, password];
      const user = await userModel.getUserDetails(params);
      ctx.response.status = 200;
      ctx.body = {
        success: true,
        status: 200,
        data: { user },
        statusMessages: ['LogIn is successful'],
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
