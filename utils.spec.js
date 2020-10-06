/*
모카(Mocha)는 테스트 코드를 돌려주는 테스트 러너
테스트 수트 : 테스트 환경으로 모카에서는 describe()으로 구현한다
테스트 케이스 : 실제 테스트를 말하며 모카에서는 it()으로 구현한다
*/

import { capitalize } from './utils';
import { strictEqual } from 'assert';

decribe('utils.js 모듈의 capitalize 함수는 ', () => {
    it('문자열의 첫번째 문자를 대문자로 변환한다', () => {
        // ... 실제 테스트 해야할 코드
        const result = utils.capitalize('hello');
        assert.strictEqual(result, 'Hello');
    })
})