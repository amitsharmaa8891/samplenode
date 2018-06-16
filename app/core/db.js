var mysql = require('mysql');
var db;
var settings = require('../../settings.js')
function connectDatabase() {
    if (!db) {
        db = mysql.createConnection({
          host     : settings.DB_HOST,
          user     : settings.DB_USERNAME,
          password : settings.DB_PASSWORD,
          database : settings.DB_DATABASE
        });

        db.connect(function(err){
            if(!err) {
                console.log('Database is connected!');
            } else {
                console.log('Error connecting database!');
            }
        });
    }
    return db;
}

module.exports = connectDatabase();
