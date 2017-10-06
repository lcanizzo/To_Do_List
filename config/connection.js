// M Y S Q L   S E T U P

const mysql = require('mysql');
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "to_do_db"
})

connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;
