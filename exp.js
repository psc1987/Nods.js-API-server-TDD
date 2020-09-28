// 1. 어플리케이션
// 익스프레스 인스턴스를 어플리케이션이라 한다.
// 서버에 필요한 기능인 미들웨어를 어플리케이션에 추가한다.
// 라우팅 설정을 할 수 있다.
// 서버를 요청 대기 상태로 만들수 있다.

const express = require('express');
const morgan = require('morgan');
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

app.use(logger); // use를 사용해 호출
app.use(logger2);
app.use(moargan('dev'));


// 일반 미들웨어 VS 에러 미들웨어
function commonmw(req, res, next) {
    console.log('commonmw');
    next(new Error('error occured')); // 에러 객체 넘겨줌
}

function errormw(err, req, res, next) { // 에러 객체를 첫번째 파라미터로 받아서 메세지 출력
    console.log(err.message);
    next();
}

app.use(commonmw);
app.use(errormw);



// 3. 라우팅
// 요청 url에 대해 적절한 핸들러 함수로 연결해 주는 기능
// 어플리케이션의 get(), post() 메소드로 구현할 수 있다.
// 라우팅을 위한 Router 클래스 사용 가능



// 4. 요청 객체
// 클라이언트 요청 정보를 담은 객체를 요청(Request)객체라고 한다.
// req.params(), req.query(), req.body() 메소드를 주로 사용 한다.


// 5. 응답객체
// 클라이언트 응답 정보를 담은 객체를 응답(Response)객체라고 한다.
// req.send(), req.status(), req.json() 메소드를 주로 사용 한다.




/*app.listen(3000, function() {
    console.log('Server is running');
})*/