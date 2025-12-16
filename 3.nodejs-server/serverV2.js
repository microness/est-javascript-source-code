// Express.js라는 웹 서버 개발용 프레임워크를 활용하여 보다 추상화된 코드로 서버 구현

import express from 'express';
// 만약에 내 개발환경에 express.js코드가 설치되어 있다면(node_modules/에 있음)
// 해당 코드를 불러오는 코드

const app = express() // app -> express 모듈을 활용할 수 있는 객체를 담은 변수
const port = 3000 // 실행될 포트 번호

// 사용자가 브라우저에서 http://localhost:3000'/'경로로 요청 시 동작할 콜백함수
app.get('/', (request, response) => {
  // TODO: index.html이 나오게 하려면??
})

app.listen(port, () => {
  console.log(`Express 서버가 해당 포트에서 대기중: ${port}`)
})