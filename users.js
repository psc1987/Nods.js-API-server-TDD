var express = require('express');
var morgan = require('morgan');
var app = express();
var users = [
    { id: 1, name: 'alice' },
    { id: 2, name: 'heejin' },
    { id: 3, name: 'bob' }
];

app.use(morgan('dev'));

app.get('/users', function(req, res) {
    res.json(users);
});

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});

/*
curl -X GET "localhost:3000/users"
200번 응답과 함께 다음 결과 출력
[{"id":1,"name":"alice"},{"id":2,"name":"heejin"},{"id":3,"name":"bob"}]
*/