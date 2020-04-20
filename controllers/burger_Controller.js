var express = require("express");
var router = express.Router();
var Orm = require("../config/orm");

router.get("/", function (req, res) {
  Orm.selectAll(function (data) {
    console.log(data);
    let devoured = 0;
    data.forEach(function (burger) {
      console.log(burger.devoured);
      if (burger.devoured === 1) {
        devoured++;
        console.log(devoured);
      }
    });

    if (devoured >= 10) {
      Orm.deleteAll(function (data) {
        console.log("Made room for more yummy");
        res.render("index", hbsObject);
      });
    } else {
      var hbsObject = {
        burger: data,
      };
      res.render("index", hbsObject);
    }
  });
});

router.post("/api/burger", function (req, res) {
  let burger = req.body;
  Orm.insertOne(burger, function (result) {
    res.json({ id: result.insertId });
  });
});

router.put("/api/burger/:id", function (req, res) {
  var condition = req.params.id;

  Orm.updateOne(condition, function (result) {
    if (result.changedRows === 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    }
    res.status(200).end();
  });
});

// Export routes for server.js to use.
module.exports = router;
