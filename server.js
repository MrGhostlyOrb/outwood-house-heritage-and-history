// Serve a static html file
const compression = require('compression');
const express = require('express');
const app = express();

// enable text compression
app.use(compression());

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(3000, function() {
    console.log('listening on port 3000');
});