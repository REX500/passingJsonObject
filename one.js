var jTwo = require(__dirname+"/two.js");

var jOne = {};
var jPassedObject = {"name":"Cucumber"};

jOne.fnStartPassingTheObject = function(){
  // pass the json to the other object
  jTwo.fnAcceptTheObject(jPassedObject);
}

module.exports = jOne;
