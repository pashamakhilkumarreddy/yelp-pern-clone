const AuthenticationController = require('./AuthenticationController');
const ProfileController = require('./ProfileController');
const RestaurantController = require('./RestaurantController');

module.exports = {
  ...AuthenticationController,
  ...ProfileController,
  ...RestaurantController,
};
