var app = require('./apps/app.js');

var server = app.listen(80, function(){
    console.log("Node.js is listening to PORT:" + server.address().port);
});