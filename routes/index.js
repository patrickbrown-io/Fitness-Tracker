const router = require('express').Router();

const homeRoutes = require('./htmlroutes')
const apiRoutes = require('./apiroutes')

router.use('/',homeRoutes)
router.use('/api',apiRoutes)

module.exports = router;