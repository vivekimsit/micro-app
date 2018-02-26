'use strict';

const { Router } = require('express');

const router = new Router();

router.get('/greet', async (req, res) => {
  res.status(200).send('Hello World');
});

module.exports = router;
