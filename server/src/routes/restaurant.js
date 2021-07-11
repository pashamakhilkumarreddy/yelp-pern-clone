import KoaRouter from 'koa-router';
import handler from '../handlers/index.js';
import middlewares from '../middlewares/index.js';

const router = new KoaRouter({
  prefix: '/api/v1/restaurants',
});

router.post('/', middlewares.isAuthenticated, handler.addRestaurant);
router.get('/', middlewares.isAuthenticated, handler.getAllRestaurants);
router.get('/:id', middlewares.isAuthenticated, handler.getRestaurantInfo);
router.put('/:id', middlewares.isAuthenticated, handler.updateRestaurantInfo);
router.delete('/:id', middlewares.isAuthenticated, handler.deleteRestaurant);

export default router;
