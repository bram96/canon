/**
 * Created by Bjorn on 4/05/2015.
 */

var ObjectId = require('mongoose').Types.ObjectId;

module.exports = function (server, person) {

  // GET list of persons. //
  server.get('/api/person/', function (req, res, next) {
    person.find({}, function (err, result) {
      if (err) {
        res.status(404).json(err);
      } else {
        res.status(200).json(result);
      }
    });
  });

  // GET a specific perosn from the database //
  server.get('/api/person/:id', function (req, res, next) {
    if (ObjectId.isValid(req.params.id)) {
      person.findById(req.params.id, function (result, err) {
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

  // ADD a new person //
  server.post('/api/person/', function (req, res, next) {
    new person(req.body).save(function (err) {
      if (err) {
        res.status(406).json(err);
      } else {
        res.status(200).json({"message": "the user was succesfully added"});
      }
    });
  });

  // DELETE a specific person //
  server.delete('/api/person/:id', function (req, res, next) {
    if (ObjectId.isValid(req.params.id)) {
      person.findById(req.params.id).remove(function (err) {
        if (err) {
          res.status(404).json(err);
        } else {
          res.sendStatus(200);
        }
      });
    } else {
      res.sendStatus(400);
    }
  });

  // UPDATE a specific user //
  server.put('/api/person/:id', function (req, res, next) {
    if (ObjectId.isValid(req.params.id)) {
      person.update({_id: req.params.id}, req.body, {upsert: true}, function (err, doc) {
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
