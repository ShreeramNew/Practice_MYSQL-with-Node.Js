const mysql = require("mysql");
const connection = mysql.createConnection({
   host: "sql6.freesqldatabase.com",
   user: "sql6701856",
   password:"KkVwb37FNH",
   database: "sql6701856",
   port:3306
});

connection.connect((err) => {
   if (err) {
      console.log(err);
   } else {
      console.log("DataBase Connected succefully! Jai Shreeram");
   }
});


module.exports = connection;
