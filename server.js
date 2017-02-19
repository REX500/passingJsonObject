/*var express = require("express");
var app = express();*/

var one = require(__dirname+"/one.js");

// method that initializes the flow of passing the object

one.fnStartPassingTheObject();

app.listen(10008 , function(){
  console.log("Server listening to port 10008");
});
