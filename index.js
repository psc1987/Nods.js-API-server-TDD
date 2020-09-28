const http = require('http');         // http(기본모듈)라는 모듈을 사용

http.createServer();




// 모듈을 만들어 보자
// 함수를 정의 해주고
function sum(a, b) {
    return a + b;
}
// module이라는 키워드를 통해 sum 이라는 객체를 할당하여 모듈을 만든다.
module.exports = {
    sum: sum
}
