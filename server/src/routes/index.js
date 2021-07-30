import auth from './auth.js';
import profile from './profile.js';
import restaurant from './restaurants.js';

const routes = ({ app }) => {
  app.use(auth.routes());
  app.use(auth.allowedMethods());
  app.use(profile.routes());
  app.use(profile.allowedMethods());
  app.use(restaurant.routes());
  app.use(restaurant.allowedMethods());
};

export default routes;
