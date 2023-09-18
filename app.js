const express = require("express");
const app = express();

//MongoDB Configuration
require("./config/mongodb");

//Node Server Port
let port = process.env.PORT;

//Listening to port
app.listen(port, function(){
    console.log("Listening to Port ", port);
})