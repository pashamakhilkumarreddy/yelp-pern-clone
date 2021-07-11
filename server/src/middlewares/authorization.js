export function isAuthenticated(ctx) { // eslint-disable-line import/prefer-default-export
  try {
    ctx.response.status = 200;
    ctx.body = {
      success: false,
      status: 200,
      statusMessages: ['Internal server error'],
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
}
