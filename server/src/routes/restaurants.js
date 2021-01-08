const KoaRouter = require('koa-router');

const {
  addRestaurant, fetchRestaurants, fetchRestaurantDetails, updateRestaurant, deleteRestaurant,
} = require('../controllers');
const { validateToken } = require('../middlewares');

const router = new KoaRouter();

router.get('/restaurants', fetchRestaurants);
router.post('/restaurants', validateToken, addRestaurant);
router.get('/restaurants/:id', fetchRestaurantDetails);
router.put('/restaurants/:id', validateToken, updateRestaurant);
router.del('/restaurants/:id', validateToken, deleteRestaurant);

module.exports = router;
