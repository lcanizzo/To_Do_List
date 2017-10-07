// M Y S Q L   S E T U P

const mysql = require('mysql');
let connection;

let connect = ()=>{
  connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });
}

if(process.env.JAWSDB_URL) {
    //Heroku deployment
    connection = mysql.createConnection(process.env.JAWSDB_URL);
    connect();
  } else {
    //local host
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "to_do_db"
    })
    connect();    
  };

module.exports = connection;
