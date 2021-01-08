const auth = require('./auth');
const restaurants = require('./restaurants');
const profile = require('./profile');

module.exports = ({ app }) => {
  app.use(auth.routes());
  app.use(auth.allowedMethods());
  app.use(restaurants.routes());
  app.use(restaurants.allowedMethods());
  app.use(profile.routes());
  app.use(profile.allowedMethods());
};
