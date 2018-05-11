const { Router } = require('express');

const dashboard = require('./dashboard');
const { catchAsyncErrors } = require('../../lib/utils');

const router = new Router();

router.get('/dashboard', catchAsyncErrors(dashboard));

module.exports = router;
