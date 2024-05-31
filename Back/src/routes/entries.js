const Router = require('koa-router');

const router = new Router();

// Vale 1 por implementarlo (0.5 por 201 y 0.5 por 500 y response estandar)
// POST /entries
router.post('/entry.create', '/', async ctx => {
    try {
        const entry = await ctx.orm.Entry.create(ctx.request.body);
        ctx.body = entry;
        ctx.status = 201;
    } catch (error) {
        ctx.status = 500;
        // Este es un response estandar para el 500
        ctx.body = { error: error.message };
    }
});

// Vale 1 por implementarlo (0.5 por 200 y 0.5 por 500)
// GET /entries
router.get('/entry.list', '/', async ctx => {
    try {
        const entries = await ctx.orm.Entry.findAll();
        ctx.body = entries;
        ctx.status = 200;
    } catch (error) {
        ctx.status = 500;
        // Este es un response estandar para el 500
        ctx.body = { error: error.message };
    }
});

// Vale 1.5 por implementarlo (0.5 por 200 y 0.5 por 500) y 0.5 por 404 y response estandar
// GET /entries/user/:username
router.get('/entry.listByUser', '/user/:username', async ctx => {
    try {
        const user = await ctx.orm.User.findOne({ where: { username: ctx.params.username } });
        if (!user) {
            ctx.status = 404;
            // Este es un response estandar para el 404
            ctx.body = { error: 'User not found' };
            return;
        }
        const entries = await ctx.orm.Entry.findAll({ where: { belongs_to: ctx.params.username } });
        ctx.body = entries;
        ctx.status = 200;
    } catch (error) {
        // Este es un response estandar para el 500
        ctx.status = 500;
        ctx.body = { error: error.message };
    }
});

// Vale 1.5 por implementarlo (0.5 por 200 y 0.5 por 500) y 0.5 por 404 y response estandar
// GET /entries/:id
router.get('/entry.show', '/:id', async ctx => {
    try {
        const entry = await ctx.orm.Entry.findOne({ where: { id: ctx.params.id } });
        if (entry) {
            ctx.body = entry;
            ctx.status = 200;
        } else {
            ctx.status = 404;
            // Este es un response estandar para el 404
            ctx.body = { error: 'Entry not found' };
        }
    } catch (error) {
        ctx.status = 500;
        // Este es un response estandar para el 500
        ctx.body = { error: error.message };
    }
});

// Vale 1.5 por implementarlo (0.5 por 200 y 0.5 por 500) y 0.5 por 404 y response estandar
// PATCH /entries/:id
router.patch('/entry.update', '/:id', async ctx => {
    try {
        const entry = await ctx.orm.Entry.findOne({ where: { id: ctx.params.id } });
        if (entry) {
            await entry.update(ctx.request.body);
            ctx.body = entry;
            ctx.status = 200;
        } else {
            ctx.status = 404;
            // Este es un response estandar para el 404
            ctx.body = { error: 'Entry not found' };
        }
    } catch (error) {
        ctx.status = 500;
        // Este es un response estandar para el 500
        ctx.body = { error: error.message };
    }
});

// Vale 1.5 por implementarlo (0.5 por 200 y 0.5 por 500) y 0.5 por 404 y response estandar
// DELETE /entries/:id
router.delete('/entry.delete', '/:id', async ctx => {
    try {
        const entry = await ctx.orm.Entry.findOne({ where: { id: ctx.params.id } });
        if (entry) {
            await entry.destroy();
            ctx.status = 200;
        } else {
            ctx.status = 404;
            // Este es un response estandar para el 404
            ctx.body = { error: 'Entry not found' };
        }
    } catch (error) {
        ctx.status = 500;
        // Este es un response estandar para el 500
        ctx.body = { error: error.message };
    }
});

module.exports = router;