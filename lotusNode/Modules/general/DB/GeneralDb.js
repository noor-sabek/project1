
let mysql = require('mysql');
let config = require('../../../config/config.json')


module.exports.dbTreatment = (DBquery) =>{

  var connection = mysql.createConnection({
    "host": "localhost:8000",
    "user": "root",
    "password": "yourpassword",
     "database": "MontessoriProjData"
   })
  connection.connect(function(err) {
    // if (err) throw err;
    console.log("Connected!")

  connection.query(DBquery, function (err, result) {
   return result
 })
});

}
