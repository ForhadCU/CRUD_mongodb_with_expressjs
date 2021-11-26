const my_express = require("express");
const my_mongoose = require("mongoose");
const my_url = "mongodb://localhost/My_mongo_db_1";
//alternate of process.env.my_mongo_url
// const my_url ="mongodb+srv://crudjs:afb.kashem@cluster0.uekbh.mongodb.net/crudJs_Api?retryWrites=true&w=majority";
// const dotenv = require("dotenv"); //config file that use to declare url, port number etc.
const app = my_express();

//Connect MongoDB first
//dotenv is always above from the mongoose.connect
/* dotenv.config({
  path: "./config/config.env",
}); */

my_mongoose.connect(my_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const con = my_mongoose.connection;

con.on("open", function () {
  console.log("Connected to MongoDB!");
}); //End

//use a middleware to for show json format data
app.use(my_express.json());

//route to departments.js
const routeDepartments = require('./routes/departments')
app.use('/departments', routeDepartments)


app.listen(3000, () => {
  console.log("server is running on PORT : 3000");
});