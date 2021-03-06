const express = require("express"),
      app = express(),
      path = require("path"),
      mongoose = require("mongoose"),
      router = require("./routes/routes");

const port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, 'public')));

app.use(router);

//connect to the database
const mlabUrl = process.env.MONGOLAB_URI; /*get mlab url(credentials) from environment variables and url-shortner is dbname*/
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/imageSearchAbstractionLayer"); /*connect to mongodb(on mlab, not locally) with mongoose
either on mlab cloud remote database or on locally installed mongodb*/

const connection = mongoose.connection;
connection.on('error', console.error.bind(console, 'connection error:'))
connection.on('open', ()=>{
    console.log("connected correctly to the database");
})


app.listen(port, ()=>{
    console.log("app is listening on port");
})