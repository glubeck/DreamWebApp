// setup Express
var app = require('./models/express.js');
var Popover = require('./app/react-bootstrap/lib/Popover.js');
         

// start the server
var server = app.listen(3000, function() {
console.log("Started on port 3000");
var host = server.address().address;
var port = server.address().port;
});