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

  router.post("/api/burgers", function(req, res){
      let newBurger = req.body.burger_name
      burger.insert("burger_name", newBurger, function(data){
        res.redirect("/")
      })
  })

  router.delete("/api/burgers/:id", function(req, res){
      let id = req.params.id
      burger.delete(id, function(data){
          res.status(200).end()
      })
  })

  module.exports = router