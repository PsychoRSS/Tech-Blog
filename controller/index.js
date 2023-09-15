const router = require('express').Router();

const apiRoutes = require('./api');
const blogRoutes = require('./blogRoute');

router.use('/', blogRoutes);
router.use('/api', apiRoutes);

module.exports = router;
