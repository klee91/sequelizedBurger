var express = require('express');

var router = express.Router();
var db = require("../models");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    db.Burger.findAll({
    }).then(function(dbBurger) {
      var hbsObject = {
        burgers: dbBurger
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
});

router.post("/", function(req, res) {
  db.Burger.create({burger_name: req.body.name}).then(function(dbBurger) {
    console.log(dbBurger);
      res.redirect("/")
    });
});

router.put("/:id", function(req, res) {
  var a = {
        devoured: true
      }
  db.Burger.update( a, {
        where: {
          id: req.params.id
        }
      }).then(function(dbBurger) {
        console.log(dbBurger);
        res.redirect("/")
      });
});

// Export routes for server.js to use.
module.exports = router;


