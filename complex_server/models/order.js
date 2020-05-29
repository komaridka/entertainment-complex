const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    email: String,
    event: String,
    message: String,
    name: String,
    phone: String
}, {versionKey: false});

const Order = mongoose.model('orders', orderSchema);

module.exports = {Order}
