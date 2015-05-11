/**
 * Created by Bjorn on 04-05-2015.
 */

var mongoose = require('mongoose');
var connection = mongoose.connect("mongodb://canon:start@ds029640.mongolab.com:29640/canon");

module.exports = function addDatabase(req, res, next) {
  req.mongoose = mongoose;
  next();
}
