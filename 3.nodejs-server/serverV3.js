import express, { json } from 'express';

const app = express()
const port = 3000

// 정적 리소스를 사용자에게 호스팅하기
app.use(express.static('public'));
// -> 'public'이라는 이름의 폴더를 정적(static) 리소스가 제공되는 경로로 적용하는 코드

app.use(json()) // 역직렬화 모듈 추가

// '/'오면 index.html을 응답하는 엔드포인트
app.get('/', (request, response) => {
  response.sendFile('index.html'); // public/index.html 파일을 응답하라는 코드  
});

// 또 다른 엔드포인트
// '/example'오면 사용자가 전달한 텍스트를 콘솔에 출력하는 엔드포인트
app.post('/example', (request, response) => {
  console.log('/example 엔드포인트가 호출됨');
  console.log(request.body); // 요청 객체에서 body(몸체)에 데이터가 들어있음
  // -> { query: '안녕' }

  // 클라이언트로부터 받은 데이터를 처리해서 "Hello!"로 번역 처리가 되었다고 가정하고, 응답하기
    // 응답용 객체 생성
    const responseData = {
      result: 'Hello!' // 번역 결과 텍스트(라고 가정)
    }

    // 응답용 데이터인 responseData를 클라이언트로 전달하려면 무슨 객체를 써야할까?
    response.send(responseData); // 응답 메시지 내의 body 부분에 responseData를 넣어서 전달
  
});

app.listen(port, () => {
  console.log(`Express 서버가 해당 포트에서 대기중: ${port}`)
})