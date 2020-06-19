var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World!\n');
});

app.get('/venus', function (req, res) {
  res.send('Hello Venus!\n');
});

app.get('/jake', function (req, res) {
  res.send('I wuv you!!!!\n');
});

app.get('/rob', function (req, res) {
  res.send('Booo!!!!\n');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

