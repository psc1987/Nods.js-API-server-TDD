const http = require('http');

http.createServer();

function sum(a, b) {
    return a + b;
}

module.exports = {
    sum: sum
}