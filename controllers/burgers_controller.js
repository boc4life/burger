let express = require("express");

let router = express.Router();

let burger = require("./../models/burger")

router.get("/", function(req, res) {
    burger.all(function(data) {
      var hbsObject = {
        burgers: data
      };
      res.render("index", hbsObject);
    });
  });

  router.put("/api/burgers/:id", function(req, res){
      let id = req.params.id
      let state = req.body.devoured
      burger.update("devoured", state, id, function(data){
        res.status(200).end()
      })
  })

  module.exports = router