import authHandler from './authHandler.js';
import restaurantHandler from './restaurantHandler.js';
import profileHandler from './profileHandler.js';

export default {
  ...authHandler,
  ...restaurantHandler,
  ...profileHandler,
};
