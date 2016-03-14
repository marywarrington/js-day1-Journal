var pingPong = require('./ping-pong.js').pingPong;
var prompt = require('prompt');
prompt.start();

prompt.get('goal', function(err, result) {
  var endResult = pingPong(result.goal);
  endResult.forEach(function(element) {
    console.log(element);
  });
});
