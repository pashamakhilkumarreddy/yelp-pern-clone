module.exports = {
  async validateToken(ctx) {
    try {
      ctx.response.status = 200;
      ctx.body = {
        success: true,
        status: 200,
        statusMessages: [
          'Successfully ',
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
