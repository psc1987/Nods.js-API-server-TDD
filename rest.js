/* 요청형식
HTTP 메소드
GET: 자원을 조회
POST: 자원을 생성
PUT: 자원을 갱신
DELETE: 자원을 삭제
*/

var express = require('express');
var app = express();


app.get('/users', function(req, res) {
    res.send('Hello World!');
});

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});

/* 응답형식

2XX: 
200: 성공(success), GET, PUT
201: 작성됨(created), POST
204: 내용 없음 (No Conent), DELETE

4XX: 
400: 잘못된 요청 (Bad Request)
401: 권한 없음 (Unauthorized)
404: 찾을 수 없음 (Not found)
409: 충돌 (Conflict)

5XX: 
500: 서버 에러 (Interel server error)
*/