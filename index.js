require('dotenv').config();

const express=require('express');

const app=express();
const PORT=5000;


app.listen(PORT,()=>{
   console.log("Ready to listen!");
})


app.use('/name',require("./routers/GetData"));

//To practice envoirnment variables:
let myVal=process.env.DB_PASSWORD||3000;
console.log(myVal);

