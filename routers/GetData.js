let selectCommad = "select * from test";
const connection = require("../DataBaseConnect");
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
   connection.query(selectCommad, (err, result) => {
      if (err) {
         console.log("Iam:",err);
      } else {
         res.json(result);
      }
   });
  
});

module.exports=router;
