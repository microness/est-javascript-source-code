// 브라우저가 아닌 Node.js를 통해 실행하기
// node server.js

// ** 현재 경로에 해당 파일이 있는지 꼭 확인!!!!
console.log('hello node.js!!');

// ------------------------
// 서버를 실행하기 위한 코드 작성 

import http from 'http' // node.js 내 http 내장 모듈 import(불러오기)
// -> 서버를 실행하기 위한 내장 모듈

// 포트 번호 설정
const port = 3000;

// 서버를 생성하는 함수를 활용해서 서버의 로직을 작성
    // http.createServer('콜백함수');
    // 콜백함수의 역할 - 사용자의 요청에 대해 서버가 실제로 수행할 로직을 작성하는 부분
        // ex. 사용자가 localhost:3000/로 요청을 전송하면 서버가 Hello World!라고 텍스트를 응답하도록 하고싶음

const server = http.createServer((request, response) => {
    console.log(typeof request); // request 객체의 타입??
    console.log(request); // 요청 객체 자체를 찍어보자, 엄청 김
    
    // TODO: 서버가 수행할 로직 작성 부분
    if (request.url === '/') { // 요청 URL이 localhost:3000'/'일 경우,
        response.end('Hello World!'); // Hello World!를 응답하라는 건가?
        // end()의 사용법? 이 중요한게 아니고 response??(응답 객체인가?)
    } else if (request.url === '/bye') { // localhost:3000'/bye'일 경우,
        // 처리할 로직 작성
        response.end('Bye World!!');
    }

}); // createServer()함수는 생성된 서버 객체를 반환하고, 해당 객체를 server라는 변수(상수)에 초기화

// 서버가 3000번 포트에서 실행상태로 무한정 대기하도록 지정
server.listen(port, () => console.log(`서버가 http://localhost:${port}에서 실행 대기 중입니다`));
