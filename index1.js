// index.js 에서 작성한 sum함수 모듈사용
const math = require('./index.js');

const result = math.sum(1, 4);
console.log(result);


// 파일 모듈 (동기)
const fs = require('fs');

/*const data = fs.readFileSync('./data.txt', 'utf8');
console.log(data);
*/

// 파일 모듈 (비동기)
// 마지막 파라미터로 콜백 함수를 주게 된다.
// 파일을 다 읽을 때가지 기다리지않고, 다음 명령을 실행한다.
// 다 읽은 후, 콜백함수 발동
const data = fs.readFile('./data.txt', 'utf8', function(err, data) {
    console.log(data);
});
