/**
 * Created by Bjorn on 04-05-2015.
 */

var mongoose = require('mongoose');

var PRODUCT = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true}
  },
  {
    collection: 'PRODUCT'
  });

module.exports = mongoose.model('product', PRODUCT);
