/*
단위 테스트 : 함수의 기능 테스트
통합 테스트 : API의 기능 테스트 (supertest)
슈퍼 테스트는 익스프레스 통합 테스트용 라이브러리다
내부적으로 익스프레스 서버를 구동시켜 실제 요청을 보낸 뒤, 결과를 검증한다
*/

/*
성공
    유저 객체를 담은 배열로 응답한다
    최대 limit 객수만큼 응답한다
    
실패
    limit의 숫자형이 아니면 400을 응답한다
    offset의 숫자형이 아니면 400을 응답한다
*/

const app = require('./users1');
const request = require('supertest');

describe('GET /users1은,', () => {
    it('...', (done) => {
        request(app)
            .get('/users1')
            .end((err, res) => {
                console.log(res.body);
                done();
            })
    })
})