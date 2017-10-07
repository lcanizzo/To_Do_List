// M Y S Q L   S E T U P

const mysql = require('mysql');
let connection;

if(process.env.JAWSDB_URL) {
    //Heroku deployment
    connection = mysql.createConnection(process.env.JAWSDB_URL);
  } else {
    //local host
    mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "to_do_db"
    })
  };

connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;
