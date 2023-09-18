require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://dheeruzuke99:googleforms99@googleformscluster.gvu2njt.mongodb.net/?retryWrites=true&w=majority")
.then(() => {
    console.log("Database Connection Successful");
}).catch((e) => {
    console.log("Connection Failed");
})