const connection = require("./DataBaseConnect");
require('dotenv').config();

console.log(process.env.DB_NAME);

let selectCommad = "select * from test";

connection.query(selectCommad, (err, result) => {
   if (err) {
      console.log(err);
   } else {
      console.log(result);
   }
});
