let selectCommad = "select * from test";
const connection = require("../DataBaseConnect");
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    //Fetches all data from MySQL database
   connection.query(selectCommad, (err, result) => {
      if (err) {
         console.log(err);
      } else {
         res.json(result);
      }
   });
  
});

module.exports=router;
