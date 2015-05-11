/**
 * routes/index.js
 * All routes are here to import all of them just with one command
 * in the main app.js
 *
 */
var person = require('./person');
var personCollection = require("../models/person");
var product = require('./product');
var productCollection = require('../models/product');
var invoice = require('./invoice');
var invoiceCollection = require('../models/invoice');

module.exports = function (server) {
  person(server, personCollection);
  product(server, productCollection);
  invoice(server, invoiceCollection);
}
