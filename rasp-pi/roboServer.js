var five = require('johnny-five'),
  board = new five.Board(),
  driveServo;

var http = require('http');
var url = require('url');

board.on("ready", function(){
  console.log("Board ready");
  //create a web server and listen
  http.createServer(function (req, res) { //req = request, res = response
    //retrieve the json from the response body
    var jsonData = req.body.data;

    if (jsonData.command == "FF")
    {
      //go forward
    }
    else if (jsonData.command == "RR")
    {
      //go backward
    }
    //respond to request
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify({ command: jsonData.command, executed: true }));
  }).listen(1337);
});
console.log("Waiting for a device to connect.")
