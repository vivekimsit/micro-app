'use strict';

const { Router } = require('express');

const bookings = require('./bookings');
const hotels = require('./hotels');
const rooms = require('./rooms');
const users = require('./users');

const { catchAsyncErrors } = require('../../lib/utils');
const auth = require('../middlewares/auth');

const router = new Router();

router.get('/users', auth, catchAsyncErrors(users.get));
router.get('/users/:id', auth, catchAsyncErrors(users.getById));

router.get('/hotels', auth, catchAsyncErrors(hotels.get));
router.get('/hotels/:id', auth, catchAsyncErrors(hotels.getById));
router.post('/hotels', auth, catchAsyncErrors(hotels.post));
router.delete('/hotels/:id', auth, catchAsyncErrors(hotels.deleteById));

router.get('/hotels/:id/rooms', auth, catchAsyncErrors(rooms.get));
router.get('/hotels/:id/rooms/:id', auth, catchAsyncErrors(rooms.getById));
router.post('/hotels/:id/rooms', auth, catchAsyncErrors(rooms.post));
router.delete('/hotels/:id/rooms/:id', auth, catchAsyncErrors(rooms.deleteById));

router.get('/hotels/:id/bookings', auth, catchAsyncErrors(bookings.get));

module.exports = router;
