var express = require('express');
var morgan = require('morgan');
var app = express();
var users1 = [
    { id: 1, name: 'alice' },
    { id: 2, name: 'heejin' },
    { id: 3, name: 'bob' }
];

app.use(morgan('dev'));

app.get('/users1', function(req, res) {
    res.json(users1);
});

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});


module.exports = app;