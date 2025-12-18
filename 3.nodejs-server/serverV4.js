import express, { json } from 'express';
import HTTP from 'superagent';

const app = express()
const port = 3000

app.use(express.static('public'));
app.use(json()) 
// ↓ -------------------------------------------------------

app.get('/', (request, response) => {
  response.sendFile('index.html'); 
});

const CLIENT_ID = 'w0k0mhoxcw';
const CLIENT_SECRET = 'tMUbOkTKwPTAsjw5FL8pVCwt1g178wLjgthFoBbM'
const TRANSLATION_URL = 'https://papago.apigw.ntruss.com/nmt/v1/translation';
const DETECT_URL = 'https://papago.apigw.ntruss.com/langs/v1/dect';

/** 문서화 주석
 * 언어감지 API
 * 엔드포인트: /detect
 * 사용자(브라우저)로부터 전달받은 텍스트를 
 * NCP언어감지 엔드포인트로 전달하여 언어 감지 결과값을 VSCode 콘솔에 출력한다.
 */
app.post('/detect', (request, response) => {
      // 1. 사용자 or apidog 으로부터 받은 텍스트값 추출
      console.log(request.body); // { "query": "안녕하십니까?" }
      const { query } = request.body; // 객체 디스트럭처링 활용하여 프로퍼티의 값을 추출 및 할당
      
      HTTP
          .post(DETECT_URL) 
          .send(request.body) 
          .set('Content-Type', 'application/json') 
          .set('x-ncp-apigw-api-key-id', CLIENT_ID)
          .set('x-ncp-apigw-api-key', CLIENT_SECRET)
          .end((error, result) => { 
              if (result.statusCode === 200) {
                  response.send(result.body); // 클라이언트에게 응답
              } else {
                  console.error(error.message);
              }
          });
});

/**
 * 언어 번역 기능
 * @param {String} URI - 엔드포인트 주소
 * @param {Object} request - 요청 메시지가 담긴 객체
 * @param {Object} response - 응답 메시지가 담긴 객체
 * 
 * @returns {Object} 예: 언어 번역 결과 JSON
 */
app.post('/translate', (request, response) => {
  
    HTTP
          .post(TRANSLATION_URL) 
          .send(request.body) 
          .set('Content-Type', 'application/json') 
          .set('x-ncp-apigw-api-key-id', CLIENT_ID)
          .set('x-ncp-apigw-api-key', CLIENT_SECRET)
          .end((error, result) => { 
              if (result.statusCode === 200) {
                  response.send(result.body);
              } else {
                  console.error(error.message);
              }
          });
});

// ↑ -------------------------------------------------------
app.listen(port, () => {
  console.log(`Express 서버가 해당 포트에서 대기중: ${port}`)
})

