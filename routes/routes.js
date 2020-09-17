const Router = require('koa-router');
const planets = require('./planets');

const router = new Router();

router.get('/api', (ctx) => {
    ctx.body = "Star Wars API";
});

router.use('/api/planets', planets.routes(), planets.allowedMethods());

module.exports = router;
