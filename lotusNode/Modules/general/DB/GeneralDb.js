
let mysql = require('mysql');
let config = require('../../../config/config.json');
let util = require('util');

connection = mysql.createConnection({
     host: config.createConnection.host,
     user:  config.createConnection.user,
     password:  config.createConnection.password,
     database: config.createConnection.database
   });

  connection.connect(function(err) {
    if (err) {throw err};
    console.log("Connected!");
  });

  const query = util.promisify(connection.query).bind(connection);

  module.exports = {query};
