/**
 * Created by Bjorn on 4/05/2015.
 */
var ObjectId = require('mongoose').Types.ObjectId;

module.exports = function (server, product) {

// GET list of products. //
  server.get('/api/product/', function (req, res, next) {
    product.find({}, function (err, result) {
      if (err) {
        res.status(404).json(err);
      } else {
        res.status(200).json(result);
      }
    });
  });

  // GET a specific product from the database //
  server.get('/api/product/:id', function (req, res, next) {
    if (ObjectId.isValid(req.params.id)) {
      product.findById(req.params.id, function (err, result) {
        if (err) {
          res.status(404).json(err);
        } else {
          res.status(200).json(result);
        }
      })
    } else {
      res.sendStatus(400);
    }
  })

  // ADD a new product //
  server.post('/api/product/', function (req, res, next) {
    new product(req.body).save(function (err) {
      if (err) {
        res.status(406).json(err);
      } else {
        res.status(200).json({"message": "the product was succesfully added"});
      }
    });
  });

  // DELETE a specific product //
  server.delete('/api/product/:id', function (req, res, next) {
    if (ObjectId.isValid(req.params.id)) {
      product.findByID(req.params.id).remove(function (err) {
        if (err) {
          res.status(404).json(err);
        } else {
          res.sendStatus(200)
        }
      });
    } else {
      res.sendStatus(400);
    }
  });

  // UPDATE a specific product //
  server.put('/api/product/:id', function (req, res, next) {
    if (ObjectId.isValid(req.params.id)) {
      product.update({_id: req.params.id}, req.body, {upsert: true}, function (err, doc) {
        if (err) {
          res.status(406).json(err);
        } else {
          console.log(doc);
          res.sendStatus(200);
        }
      });
    } else {
      res.sendStatus(400);
    }
  });



}
