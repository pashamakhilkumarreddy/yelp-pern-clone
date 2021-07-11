import KoaRouter from 'koa-router';
import handler from '../handlers/index.js';
import middlewares from '../middlewares/index.js';

const router = new KoaRouter({
  prefix: '/api/v1/profile',
});

router.get('/', middlewares.isAuthenticated, handler.addRestaurant);
router.put('/:id', middlewares.isAuthenticated, handler.getAllRestaurants);

export default router;
