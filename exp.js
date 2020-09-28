// 1. 어플리케이션
// 익스프레스 인스턴스를 어플리케이션이라 한다.
// 서버에 필요한 기능인 미들웨어를 어플리케이션에 추가한다.
// 라우팅 설정을 할 수 있다.
// 서버를 요청 대기 상태로 만들수 있다.

const express = require('express');
const app = express();



// 2. 미들웨어
// 미들웨어는 함수들의 연속이다.
function logger(req, res, next) {
    console.log('I am logger');
    next(); // 다음 호출을 수행
}

function logger2(req, res, next) {
    console.log('I am logger2');
    next(); // 다음 호출을 수행
}

app.use(logger);
app.use(logger2);



app.listen(3000, function() {
    console.log('Server is running');
})