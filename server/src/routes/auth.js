const KoaRouter = require('koa-router');

const { login, register } = require('../controllers');

const router = new KoaRouter();

router.post('/register', register);
router.post('/login', login);

module.exports = router;
