const mysql = require("mysql");
const connection = mysql.createConnection({
   host: "localhost",
   user: "root",
   database: "nodemysql",
});

connection.connect((err) => {
   if (err) {
      console.log(err);
   } else {
      console.log("DataBase Connected succefully! Jai Shreeram");
   }
});

//    let InsertCommand = `INSERT INTO TEST (userId,name) values(102,'hanuman')`;

module.exports = connection;
