const KoaRouter = require('koa-router');

const { fetchUserProfile, updateProfile } = require('../controllers');
const { validateToken } = require('../middlewares');

const router = new KoaRouter();

router.get('/profile', validateToken, fetchUserProfile);
router.put('/profile/:id', validateToken, updateProfile);

module.exports = router;
