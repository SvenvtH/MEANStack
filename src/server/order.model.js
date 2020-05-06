const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const customerSchema = new Schema(
  {
    firstName: String,
    lastName: String,
    email: String
  });

var productsSchema = new Schema(
  {
    price: Number,
    description: String,
    name: String,
    image: String,
    amount: Number
  }
);

var shippingSchema = new Schema(
  {
    warehouse: String,
    country: String,
    state: String,
    city: String,
    street: String,
    houseNumber: String,
    arriveDate: Date
  }
);

const orderSchema = new Schema(
  {
    orderid: { type: Number, required: true, unique: true },
    date: { type: Date, required: true },
    price: { type: Number, required: true },
    status: { type: String, required: true },
    customer: [customerSchema],
    products: [productsSchema],
    shipping: [shippingSchema]
  },
  {
    collection: 'orders',
    read: 'nearest'
  }
);

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
