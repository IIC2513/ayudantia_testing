const Router = require('koa-router');
const entries = require('./routes/entries');
const users = require('./routes/users');

const router = new Router();

router.use('/entries', entries.routes());
router.use('/users', users.routes());

module.exports = router;