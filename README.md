# Nods.js-API-server-TDD
테스트주도개발(TDD)로 만드는 NodeJS API 서버

### Node 
  - [모듈](https://github.com/psc1987/Nods.js-API-server-TDD/blob/master/index.js)
  - [비동기](https://github.com/psc1987/Nods.js-API-server-TDD/blob/master/index1.js)



### 서버 연결 해보기
  - [서버 연결, Routing추가](https://github.com/psc1987/Nods.js-API-server-TDD/blob/master/hello.js)
  
  
  
### Express 
```sh
$ npm install morgan
```

  - [어플리케이션, 미들웨어, 라우팅, req/res](https://github.com/psc1987/Nods.js-API-server-TDD/blob/master/exp.js)
  
 
### npm
dependencies 확인
  - [package.json](https://github.com/psc1987/Nods.js-API-server-TDD/blob/master/package.json)
  
  
### REST API
  - [요청, 응답](https://github.com/psc1987/Nods.js-API-server-TDD/blob/master/rest.js)
  
[**사용자 목록 조회 API 만들기**](https://github.com/psc1987/Nods.js-API-server-TDD/blob/master/users.js)


### TDD
  - [TDD란?](https://github.com/psc1987/Nods.js-API-server-TDD/blob/master/tdd.txt)
  
 /node_modules/.bin 에서 mocha 명령어로 실행
  
  - Mocha
  
    [https://mochajs.org/](https://mochajs.org/)
    
    
  ```sh
$ npm install mocha --save-dev
$ node_modules/.bin/mocha utils.spec.js
```

[utils.js](https://github.com/psc1987/Nods.js-API-server-TDD/blob/master/utils.js)

[utils.spec.js](https://github.com/psc1987/Nods.js-API-server-TDD/blob/master/utils.spec.js)

  - Should
  
    [https://github.com/tj/should.js/](https://github.com/tj/should.js/)
    
    
  ```sh
$ npm install should --save-dev
$ node_modules/.bin/mocha utils.spec.js
```

[utils.js](https://github.com/psc1987/Nods.js-API-server-TDD/blob/master/utils.js)

[utils1.spec.js](https://github.com/psc1987/Nods.js-API-server-TDD/blob/master/utils1.spec.js)
  
  - Supertest
  
    [https://github.com/visionmedia/supertest](https://github.com/visionmedia/supertest)
    
  ```sh
$ npm install supertest --save-dev
$ node_modules/.bin/mocha utils.spec.js
```

[users1.js](https://github.com/psc1987/Nods.js-API-server-TDD/blob/master/users1.js)

[users1.spec.js](https://github.com/psc1987/Nods.js-API-server-TDD/blob/master/users1.spec.js)

### TDD 활용
  - 사용자 목록 조회 API 테스트 코드 
  
