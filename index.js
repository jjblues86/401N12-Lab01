'use strict';

const greet = require('./lib/greet');
const http = require('http');

const requestHandler = (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 200;
    res.write(greet.sayHello().toString());
    res.end();
};

const app = http.createServer(requestHandler);
app.listen(process.env.PORT, () => {
    return console.log('server is up');
});