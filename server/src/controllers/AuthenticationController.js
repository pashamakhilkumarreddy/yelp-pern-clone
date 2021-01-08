const { User } = require('../models');

module.exports = {
  async register(ctx) {
    try {
      const {
        email,
        password,
      } = ctx.request.body;
      const user = await User.findOne({
        where: {
          email,
        },
      });
      if (!user) {
        const newUser = User.build({
          email,
          password,
        });
        await newUser.save();
        ctx.response.status = 201;
        ctx.body = {
          success: true,
          status: 201,
          statusMessages: [
            'Successfully created a new user',
          ],
        };
        return;
      }
      ctx.response.status = 400;
      ctx.body = {
        success: false,
        status: 400,
        statusMessages: [
          'The given email already exists in our database',
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
  async login(ctx) {
    try {
      const {
        email,
        password,
      } = ctx.request.body;
      const user = await User.findOne({
        where: {
          email,
        },
      });
      if (user) {
        const isValidUser = await user.comparePassword(password);
        if (isValidUser) {
          ctx.response.status = 200;
          ctx.body = {
            success: true,
            status: 200,
            statusMessages: [
              'Successfully logged in!',
            ],
          };
          return;
        }
      }
      ctx.response.status = 400;
      ctx.body = {
        success: false,
        status: 400,
        statusMessages: [
          'Invalid login information. Please check your input!',
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
