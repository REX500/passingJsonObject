var jTwo = require(__dirname+"/two.js");

// making the json object
var jThree = {};

jThree.fnAcceptTheName = function(name){
  console.log("Hello from third object: "+name);
  // making a json to give back to the 2nd object
  var thirdObjectsJson = {"name":name};
  // giving that json back to the 2nd object
  return thirdObjectsJson;
}

module.exports = jThree;
