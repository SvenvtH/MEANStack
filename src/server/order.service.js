const Order = require('./order.model');
const ReadPreference = require('mongodb').ReadPreference;

require('./mongo').connect();

function getOrders(req, res) {
  const docquery = Order.find({}).read(ReadPreference.NEAREST);
  docquery
    .exec()
    .then(orders => {
      res.status(200).json(orders);
    })
    .catch(error => {
      res.status(500).send(error);
      return;
    });
}

function postOrder(req, res) {
  const originalOrder = { orderid: req.body.orderid, price: req.body.price, customer: req.body.firstName };
  const order = new Order(originalOrder);
  order.save(error => {
    if (checkServerError(res, error)) return;
    res.status(201).json(order);
    console.log('Order created successfully!');
  });
}

function putOrder(req, res) {
  const originalOrder = {
    orderid: parseInt(req.params.orderid, 10),
    price: req.body.price
  };
  Order.findOne({ orderid: originalOrder.orderid }, (error, order) => {
    if (checkServerError(res, error)) return;
    if (!checkFound(res, order)) return;

    // What to update
    order.price = originalOrder.price;
    order.save(error => {
      if (checkServerError(res, error)) return;
      res.status(200).json(order);
      console.log('Order updated successfully!');
    });
  });
}

function deleteOrder(req, res) {
  const orderid = parseInt(req.params.orderid, 10);
  Order.findOneAndRemove({ orderid: orderid })
    .then(order => {
      if (!checkFound(res, order)) return;
      res.status(200).json(order);
      console.log('Order deleted successfully!');
    })
    .catch(error => {
      if (checkServerError(res, error)) return;
    });
}

function checkServerError(res, error) {
  if (error) {
    res.status(500).send(error);
    return error;
  }
}

function checkFound(res, order) {
  if (!order) {
    res.status(404).send('Order not found.');
    return;
  }
  return order;
}

module.exports = {
  getOrders,
  postOrder,
  putOrder,
  deleteOrder
};
