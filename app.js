const express = require('express')
const app = express()
const port = 3000;

app.use(express.static(__dirname+'/'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
})

app.listen(port, () => console.log('The server running on Port '+port));
