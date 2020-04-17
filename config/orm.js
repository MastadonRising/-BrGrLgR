const connection = require("./connection");

const orm = {
  selectAll: function (tableName, cb) {
    var query = "SELECT * FROM ??";
    connection.query(query, [tableName], function (err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  insertOne: function (vals, cb) {
    var queryString = "INSERT INTO  burgers ( burger_name)";
    queryString += "VALUES (";
    queryString += "?";
    queryString += ") ";

    connection.query(queryString, vals, function (err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  updateOne: function (condition, cb) {
    var queryString = "UPDATE burger SET devoured = 1 WHERE";
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
};
module.exports = orm;
