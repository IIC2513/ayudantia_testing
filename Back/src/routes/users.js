const Router = require('koa-router');

const router = new Router();

// Vale 1 por implementarlo (0.5 por 201 y 0.5 por 500)
// POST /users
router.post('/user.create', '/', async ctx => {
    try {
        const user = await ctx.orm.User.create(ctx.request.body);
        ctx.body = user;
        ctx.status = 201;
    } catch (error) {
        ctx.status = 500;
        // Este es un response estandar para el 404
        ctx.body = { error: error.message };
    }
});

// Vale 1 por implementarlo (0.5 por 201 y 0.5 por 500)
// GET /users
router.get('/user.list', '/', async ctx => {
    try {
        const users = await ctx.orm.User.findAll();
        ctx.body = users;
        ctx.status = 200;
    } catch (error) {
        ctx.status = 500;
        // Este es un response estandar para el 404
        ctx.body = { error: error.message };
    }
});

// Vale 1.5 por implementarlo (0.5 por 200 y 0.5 por 500) y 0.5 por 404 y response estandar
// GET /users/:username
router.get('/user.show', '/:username', async ctx => {
    try {
        const user = await ctx.orm.User.findOne({ where: { username: ctx.params.username } });
        if (user) {
            ctx.body = user;
            ctx.status = 200;
        } else {
            ctx.status = 404;
            // Este es un response estandar para el 404
            ctx.body = { error: 'User not found' };
        }
    } catch (error) {
        ctx.status = 500;
        // Este es un response estandar para el 500
        ctx.body = { error: error.message };
    }
});

module.exports = router;