const connection = require("./connection");

const orm = {
  selectAll: function (cb) {
    var query = "SELECT * FROM burgers";
    connection.query(query, function (err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  insertOne: function (vals, cb) {
    let { name } = vals;

    var queryString = "INSERT INTO  burgers ( burger_name)";
    queryString += "VALUES (";
    queryString += "?";
    queryString += ") ";

    connection.query(queryString, name, function (err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  updateOne: function (condition, cb) {
    var queryString = "UPDATE burgers SET devoured = 1 WHERE id = ";
    queryString += condition;
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  deleteAll: function (cb) {
    var queryString =
      "delete from burgers WHERE id is not null and devoured = 1";
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
};
module.exports = orm;
