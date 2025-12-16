import express from 'express';

const app = express()
const port = 3000

// 정적 리소스를 사용자에게 호스팅하기
app.use(express.static('public'));
// -> 'public'이라는 이름의 폴더를 정적(static) 리소스가 제공되는 경로로 적용하는 코드

// 버튼을 클릭하면 클릭됨!! 호출되도록 하는 코드 예시
// button.addEventListener('click', () => console.log('클릭됨!!'));
// -> 본질적으로 아래와 동일한 코드

app.get('/', (request, response) => {
  // TODO: index.html이 나오게 하려면??
  // 서버가 클라이언트(사용자)에게 index.html 파일을 응답하려면 요청 객체와 응답 객체 중 뭘 사용해야함?

  response.sendFile('index.html'); // public/index.html 파일을 응답하라는 코드
})

app.listen(port, () => {
  console.log(`Express 서버가 해당 포트에서 대기중: ${port}`)
})