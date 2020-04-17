const orm = require("../config/orm");

var burger = {
    all: function(cb) {
      orm.selectAll( function(data) {
        cb(data);
      });
    },
  
    create: function(cols, vals, cb) {
      orm.insertOne(vals, function(res) {
        cb(res);
      });
    },
    update: function(objColVals, condition, cb) {
      orm.updateOne(condition, function(res) {
        cb(res);
      });
    }
  };
  
  // Export the database functions for the controller (catsController.js).
  module.exports = burger;
  