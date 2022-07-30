// Serve an express app over http/2

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const spdy = require('spdy');
const fs = require('fs');

// set public folder as root
app.use(express.static(__dirname + '/public'));

// Serve the app at the root url
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Serve over http/2 using spdy
const options = {
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.crt')
}


spdy.createServer(options, app).listen(port, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`Server running at port ${port}`);
    }
});
