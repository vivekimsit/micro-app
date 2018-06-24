'use strict';

const { Router } = require('express');

const bookings = require('./bookings');
const hotels = require('./hotels');
const rooms = require('./rooms');
const users = require('./users');

const { catchAsyncErrors } = require('../../lib/utils');

const router = new Router();

router.get('/users', catchAsyncErrors(users.get));
router.get('/users/:id', catchAsyncErrors(users.getById));

router.get('/hotels', catchAsyncErrors(hotels.get));
router.get('/hotels/:id', catchAsyncErrors(hotels.getById));
router.post('/hotels', catchAsyncErrors(hotels.post));
router.delete('/hotels/:id', catchAsyncErrors(hotels.deleteById));

router.get('/hotels/:id/rooms', catchAsyncErrors(rooms.get));
router.get('/hotels/:id/rooms/:id', catchAsyncErrors(rooms.getById));
router.post('/hotels/:id/rooms', catchAsyncErrors(rooms.post));
router.delete('/hotels/:id/rooms/:id', catchAsyncErrors(rooms.deleteById));

router.get('/hotels/:id/bookings', catchAsyncErrors(bookings.get));
router.post('/hotels/:id/bookings', catchAsyncErrors(bookings.post));
router.delete('/hotels/:id/bookings/:id', catchAsyncErrors(bookings.deleteById));

module.exports = router;
