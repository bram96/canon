/**
 * Created by Bjorn on 21-4-2015.
 */

var mongoose = require('mongoose');
var passwordHash = require('password-hash');

var PERSON = new mongoose.Schema({
    name: {type: String, required: true},
    zipcode: {type: String, required: true},
    city: {type: String, required: true},
    street: {type: String, required: true},
    address: {type: Number, required: true},
    email: {type: String, required: true}
  },
  {
    collection: 'PERSON'
  });

module.exports = mongoose.model('person', PERSON);
