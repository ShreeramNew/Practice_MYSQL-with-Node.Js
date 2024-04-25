let InsertCommad = "Insert into Test values('102','Jai Shreeram')";
let SelectCommand="Select * from Test";
const connection = require("../DataBaseConnect");
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    //Fetches all data from MySQL database
   connection.query(SelectCommand, (err, result) => {
      if (err) {
         console.log(err);
      } else {
         res.json(result);
      }
   });
  
});

module.exports=router;
