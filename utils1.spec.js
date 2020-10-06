/*
슈드(should)는 검증 라이브러리 이다
가독성 높은 테스트 코드를 만들 수 있다
*/

import { capitalize } from './utils';
import should from 'should';

decribe('utils.js 모듈의 capitalize 함수는 ', () => {
    it('문자열의 첫번째 문자를 대문자로 변환한다', () => {
        // ... 실제 테스트 해야할 코드
        const result = capitalize('hello');
        result.should.be.equal('Hello');
    })
})