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


module.exports = connection;
