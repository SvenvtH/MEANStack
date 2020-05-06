const express = require('express');
const router = express.Router();

const heroService = require('./hero.service');
const orderService = require('./order.service');

// Heroes
router.get('/heroes', (req, res) => {
  heroService.getHeroes(req, res);
});

router.post('/hero', (req, res) => {
  heroService.postHero(req, res);
});

router.put('/hero/:uid', (req, res) => {
  heroService.putHero(req, res);
});

router.delete('/hero/:uid', (req, res) => {
  heroService.deleteHero(req, res);
});

// Orders
router.get('/orders', (req, res) => {
  orderService.getOrders(req, res);
});

router.post('/order', (req, res) => {
  orderService.postOrder(req, res);
});

router.put('/order/:orderid', (req, res) => {
  orderService.putOrder(req, res);
});

router.delete('/order/:orderid', (req, res) => {
  orderService.deleteOrder(req, res);
});

module.exports = router;
