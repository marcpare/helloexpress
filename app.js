var express = require('express');
var app = express();

app.get('/index', function(req, res){
  res.send('Hello World');
});

app.listen(3000);
console.log('Listening on port 3000');

