const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();

// settings
app.use(favicon(__dirname + '/build/favicon.ico')); //__dirname is current directory where app is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));

// function to respond to /ping route
app.get('/ping', function (req,res) {
  return res.send('pong') // 
})

// function to respond to any other route
app.get('/*', function(req,res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html')); // send index.html back as response
})

// activate app
app.listen(port);

console.log('listening on port ', port)