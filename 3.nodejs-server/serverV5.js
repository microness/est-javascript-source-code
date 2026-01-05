import express, { json } from 'express';
import HTTP from 'superagent';
import { detectLanguage, translate } from './api.js';

const app = express()
const port = 4000

app.use(express.static('public'));
app.use(json()) 
// ↓ -------------------------------------------------------

app.get('/', (request, response) => {
  response.sendFile('index.html'); 
});

app.post('/detect', async (request, response) => {

      const payload = request.body;

      // 외부 API 호출(NCP 언어감지)
      const result = await detectLanguage(payload);

      // 클라이언트에게 응답 처리
      response.send(result);
});

/**
 * 언어 번역 기능
 * @param {String} URI - 엔드포인트 주소
 * @param {Object} request - 요청 메시지가 담긴 객체
 * @param {Object} response - 응답 메시지가 담긴 객체
 * 
 * @returns {Object} 예: 언어 번역 결과 JSON
 */
app.post('/translate', async (request, response) => {
    // TODO: 프론트에서 전달한 입력값 유효성 검증 로직 with zod 라이브러리

    const payload = request.body;

    // 외부 API 호출(NCP 언어번역)
    const result = await translate(payload);
    console.log(result);
    
    // 클라이언트에게 응답 처리
    response.send(result);
    
});

// ↑ -------------------------------------------------------
app.listen(port, () => {
  console.log(`Express 서버가 해당 포트에서 대기중: ${port}`)
})

