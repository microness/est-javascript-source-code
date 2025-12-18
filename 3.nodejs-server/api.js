import HTTP from 'superagent'; // superagent 모듈 불러오기

const CLIENT_ID = 'w0k0mhoxcw';
const CLIENT_SECRET = 'tMUbOkTKwPTAsjw5FL8pVCwt1g178wLjgthFoBbM'
const TRANSLATION_URL = 'https://papago.apigw.ntruss.com/nmt/v1/translation';

const data = {
    source: "ko",
    target: "ja",
    text: "밥먹었니?"
}

// superagent를 활용한 엔드포인트 호출 코드
HTTP
    .post(TRANSLATION_URL) // 엔드포인트 주소 및 요청 메서드(POST)
    .send(data) // 전송할 데이터
    .set('Content-Type', 'application/json') // 헤더값 세팅
    .set('x-ncp-apigw-api-key-id', CLIENT_ID)
    .set('x-ncp-apigw-api-key', CLIENT_SECRET)
    .end((error, result) => { // 응답받은 결과값 확인하고 처리
        // error - 에러 메시지 정보가 담긴 객체
        // result - 결과 데이터가 담긴 객체

        if (result.statusCode === 200) { // 200 OK일 경우,
            console.log(result.body); // body에서 결과값 추출
        } else {
            console.error(error.message); // 200 OK가 아닐 경우, 에러 메시지 출력
        }
    });
