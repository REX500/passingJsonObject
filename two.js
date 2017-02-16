var jThree = require(__dirname+"/three.js");

// making the third object
var jTwo = {};

jTwo.fnAcceptTheObject = function(object){
  var name = object.name;
  console.log(name);
  // passing the name to the third object
  var thirdObjectsJson = jThree.fnAcceptTheName(name);
  console.log("Hello from object 2, the name is: "+thirdObjectsJson.name);
}

module.exports = jTwo;
