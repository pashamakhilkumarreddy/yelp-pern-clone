import KoaRouter from 'koa-router';
import handler from '../handlers/index.js';

const router = new KoaRouter({
  prefix: '/api/v1/auth',
});

router.post('/register', handler.register);
router.post('/login', handler.login);

export default router;
