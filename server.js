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

// Bind to heroku port or default to 3000
const port = process.env.PORT || 3000;
app.listen(port);
console.log('Server running on port ' + port);