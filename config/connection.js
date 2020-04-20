var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "lgg2gx1ha7yp2w0k.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "qf93bjails376xqb",
  password: "	j5vuzjr7o1hdt61k",
  database: "	ah65t2p8ox07zrup",
});

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
