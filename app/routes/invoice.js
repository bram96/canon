/**
 * Created by Bjorn on 4/05/2015.
 */
var ObjectId = require('mongoose').Types.ObjectId;

module.exports = function (server, invoice) {

  / GET list of invoices. /
  server.get('/api/invoice/', function (req, res, next) {
    //find all the invoices, and populate it with the corresponding product data
    invoice.find().populate("products").populate("debiteur").exec(function (err, results) {
      if (err){
        res.status(404).json(err);
      }else {
        res.status(200).json(results);
      }
    })
  });

  / GET a specific invoice /
  server.get('/api/invoice/:id', function (req, res, next) {
    if (ObjectId.isValid(req.params.id)) {
      //find a invoice by id
      invoice.findById(req.params.id).populate("products").populate("debiteur").exec(function (err, result) {
        if (err){
          res.status(404).json(err);
        }else {
          console.log(result);
          res.status(200).json(result);
        }
      })
    } else {
      next();
    }

  }, function (req, res, next) {
    //find one invoice by invoice number
    invoice.findOne({number: parseInt(req.params.id)}).populate("products").populate("debiteur").exec(function (err, result) {
      if (err){
        res.status(404).json(err);
      }else {
        res.status(200).json(result);
      }
    })
  });

  / POST add a new invoice /
  server.post('/api/invoice/', function (req, res, next) {
    var json = req.body;
    //find the last invoice number
    invoice.findOne({}).select({ "number": 1, "_id": 0}).sort('-number').exec(function(err, result){
      if (err){
        res.status(404).json(err);
      }else {
        //if it exist increment it, otherwise make a new one
        if (result) {
          json.number = result.number + 1;
        } else {
          json.number = 2015001;
        }

        //make invoice new collection and save it.
        new invoice(json).save(function (err) {
          if (err) {
            res.status(406).json(err);
          } else {
            console.log("inserted json: ");
            console.log(json);
            res.sendStatus(200);
          }
        })
      }
    })

  });

  / DELETE delete a specific invoice /
  server.delete('/api/invoice/:id', function (req, res, next) {
      if (ObjectId.isValid(req.params.id)) {
        //find invoice by id and remove it
        invoice.findById(req.params.id).remove(function (err) {
          if (err){
            res.status(406).json(err);
          }else {
            console.log('Deleted record: ' + req.params.id);
            res.sendStatus(200);
          }
        });
      } else {
        next();
      }
    }
    ,
    function (req, res, next) {
      //find one invoice by invoice number and remove it
      invoice.findOne({number: parseInt(req.params.id)}).remove(function (err) {
        if (err){
          res.status(406).json(err);
        }else {
          console.log('Deleted record: ' + req.params.id);
          res.sendStatus(200);
        }
      })
    }
  );

  /PUT updates a specific invoice /
  //If no Contact document exists with
  // _id = req.params.id, then create a new doc using req.body.
  // Otherwise, update the existing doc with req.body
  server.put('/api/invoice/:id', function (req, res, next) {
    if (ObjectId.isValid(req.params.id)) {
      invoice.update({_id: req.params.id}, req.body, {upsert: true}, function (err) {
        if (err) {
          res.status(406).json(err);
        } else {
          console.log('Updated record: ' + req.params.id);
          res.sendStatus(200);
        }
      });
    }else{
      next();
    }
  }, function (req, res, next) {
    invoice.update({number: req.params.id}, req.body, {upsert: true}, function (err) {
      if (err) {
        res.status(406).json(err);
      } else {
        console.log('Updated record: ' + req.params.id);
        res.sendStatus(200);
      }
    });
  });


  //ADD a invoicefield //
  server.post('/api/invoice/:id/invoicefield', function(req, res, next){
    if(ObjectId.isValid(req.params.id)){
      invoice.findByIdAndUpdate(req.params.id,
        {$push: {'invoiceFields': {$each: req.body}}},
        {upsert: true},
        function (err) {
          if (err) {
            res.status(406).json(err);
          } else {
            res.status(200).json("invoice field added")
          }
        });
    }else{
      next();
    }
  }, function(req, res, next){
    invoice.update({number: req.params.id},
      {$push: {'invoiceFields': {$each: req.body}}},
      {upsert: true},
      function (err) {
        if (err) {
          res.status(406).json(err);
        } else {
          res.status(200).json("invoice field added")
        }
      });
  });

  //DELETE a specific invoice field //
  server.delete('/api/invoice/:id/invoicefield/:invoiceid', function(req, res, next){
    if(ObjectId.isValid(req.params.id)){
      invoice.findByIdAndUpdate(
        req.params.id,
        {$pull: {'invoicefields': req.params.invoiceid}},
        function (err) {
          if (err) {
            res.status(406).json(err);
          } else {
            res.sendStatus(200)
          }
        });
    }else{
      next();
    }
  }, function(req, res, next){
    invoice.update(
      {number: req.params.id},
      {$pull: {'invoicefields': req.params.invoiceid}},
      function (err) {
        if (err) {
          res.status(406).json(err);
        } else {
          res.sendStatus(200)
        }
      });
  });

  //ADD products to a invoice//
  server.post('/api/invoice/:id/product', function(req, res, next){
    if(ObjectId.isValid(req.params.id)){
      invoice.findByIdAndUpdate(req.params.id,
        {$push: {'products': {$each: req.body}}},
        {upsert: true},
        function (err) {
          if (err) {
            res.status(406).json(err);
          } else {
            res.status(200).json("invoice field added")
          }
        });
    }else{
      next();
    }
  }, function(req, res, next){
    invoice.update({number: req.params.id},
      {$push: {'products': {$each: req.body}}},
      {upsert: true},
      function (err) {
        if (err) {
          res.status(406).json(err);
        } else {
          res.status(200).json("invoice field added")
        }
      });
  });

  //DELETE a specific product//
  server.delete('/api/invoice/:id/product/:productid', function(req, res, next){
    if(ObjectId.isValid(req.params.id)){
      invoice.findByIdAndUpdate(
        req.params.id,
        {$pull: {'products': req.params.productid}},
        function (err) {
          if (err) {
            res.status(406).json(err);
          } else {
            res.sendStatus(200)
          }
        });
    }else{
      next();
    }
  }, function(req, res, next){
    invoice.update(
      {number: req.params.id},
      {$pull: {'products': req.params.productid}},
      function (err) {
        if (err) {
          res.status(406).json(err);
        } else {
          res.sendStatus(200)
        }
      });
  });

  //GET all innvoice fields form specific invoice //
  server.get('/api/invoice/:id/invoicefield', function(req, res, next){
    if(ObjectId.isValid(req.params.id)){
      invoice.findByID(req.params.id).select({_id: 0, invoiceFields: 1}). exec(function(err,result){
        if(err){
          res.status(404).json(err);
        }else{
          res.status(200).json(result[0]);
        }
      })
    }else{
      next();
    }
  }, function(req, res, next){
    invoice.find({number: req.params.id}).select({_id: 0, invoiceFields: 1}). exec(function(err,result){
      if(err){
        res.status(404).json(err);
      }else{
        console.log(result);
        res.status(200).json(result[0]);
      }
    });
  });

  //GET all products from specific invoice //
  server.get('/api/invoice/:id/product', function(req, res, next){
    if(ObjectId.isValid(req.params.id)){
      invoice.findByID(req.params.id).select({_id: 0, products: 1}). exec(function(err,result){
        if(err){
          res.status(404).json(err);
        }else{
          res.status(200).json(result[0]);
        }
      })
    }else{
      next();
    }
  }, function(req, res, next){
    invoice.find({number: req.params.id}).select({_id: 0, products: 1}). exec(function(err,result){
      if(err){
        res.status(404).json(err);
      }else{
        res.status(200).json(result[0]);
      }
    });
  });
}
