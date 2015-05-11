/**
 * Created by Bjorn on 04-05-2015.
 */

var mongoose = require('mongoose');

var INVOICE = new mongoose.Schema({
    debiteur: {type: mongoose.Schema.Types.ObjectId,  ref: 'person', required: true},
    number: {type: Number, required: true},
    date: {type: Date, default: Date.now, required: true},
    status: {type: String, enum: ['concept', 'verzonden', 'betaald'], required: true},
    invoiceFields: {
      type: [{
        description: {type: String, required: true},
        amount: {type: Number, required: true},
        price: {type: Number, required: true}
      }],
      required: false
    },
    products: {type: [{type: mongoose.Schema.Types.ObjectId, ref: 'product'}], required: false}
  },
  {
    collection: 'INVOICE'
  });

module.exports = mongoose.model("invoice", INVOICE);
