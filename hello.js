const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {

    // 사용자 요청이 들어왔을 때
    if (req.url === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello World\n');
    } else if (req.url === '/users') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('User list\n');
    } else {
        res.statusCode = 404;
        res.end('Not Found\n');
    }

}); // 하지만 이렇게 분기만 계속주게 되는 것은 비효율적

server.listen(port, hostname, () => { // 서버의 요청 대기 상태
    console.log(`Server running at http://${hostname}:${port}/`);
});


// http 요청을 보낼수 있는 커맨드라인 명령어
// curl -X GET 'localhost:3000'
// 다음과 같은 오류가 나왔다   :  curl: (3) Port number ended with ''' 
// 해결 방법
// https://phpschool.com/gnuboard4/bbs/board.php?bo_table=qna_install&wr_id=119676&sca=&sfl=wr_subject%7C%7Cwr_content&stx=curl&sop=and