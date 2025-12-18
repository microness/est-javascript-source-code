// appV4.js - 백엔드 API(언어감지,번역)를 호출해서 결과값을 화면에 렌더링하는 처리
// ** XMLHttpRequest를 활용하여 작성

/**
 * 참고할 부분!!
 * 
 * 언어 번역 API를 요청하려면 사전에 언어 감지 API에 대한 결과값을 먼저 받아야함!!
 * -> 비동기 요청의 결과값을 가지고 다른 후속 비동기 요청을 처리해야하는 상황
 * 
 * 1. 언어 감지 요청
 *  -> 2. 언어 번역 요청
 * 
 * 번역 요청으로 바로 건너뛰면 안됨(auto값 사용 금지)
 */

const [sourceTextArea, targetTextArea] = document.getElementsByTagName('textarea');
const [sourceSelect, targetSelect] 
= document.getElementsByTagName('select');

// 번역하고싶은 언어의 타입 변경 이벤트
// ex. English면 en, 한국어면 ko
let targetLanguage = 'en'; // 번역하고 싶은 언어의 타입, 기본값은 en(영어)
targetSelect.addEventListener('change', (event) => {
    targetLanguage = event.target.value;
});

let timerId;
sourceTextArea.addEventListener('input', (event) => {
    if (timerId) clearTimeout(timerId);

    timerId = setTimeout(() => {

        const text = event.target.value;
        const xhr = new XMLHttpRequest();
        const DETECT_URL = '/detect';

        const data = {
            query: text
        }

        const stringifiedData = JSON.stringify(data);

        xhr.open('POST', DETECT_URL);

        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(stringifiedData);

        // 외부서버로부터 요청에 대한 결과값(언어 감지 결과)을 
        // 모두 받았을 경우, 실행해!!!
        xhr.onload = () => {

            if (xhr.readyState === xhr.DONE && xhr.status === 200) {
                // xhr.response - 서버로부터 응답받은 결과값(문자열, 역직렬화 필요)
                const responseData = xhr.response;
                console.log(responseData);

                const parsedData = JSON.parse(responseData);
                console.log(parsedData);
                
                sourceSelect.value = parsedData.langCode; // langCode -> source의 값이 될 것!!
                
                // 두 번째 후속 요청 처리 코드(언어 번역)
                const xhr2 = new XMLHttpRequest(); // 새로운 XHR 객체 생성

                const TRANSLATE_URL = '/translate';

                // 감지된 언어 코드
                const detectedLanguage = parsedData.langCode;

                const data = {
                    source: detectedLanguage, // 감지된 언어 코드
                    target: targetLanguage, // 번역하고싶은 언어 코드
                    text: text // 번역할 텍스트
                }

                const stringifiedData = JSON.stringify(data);

                xhr2.open('POST', TRANSLATE_URL);

                xhr2.setRequestHeader('Content-Type', 'application/json');
                xhr2.send(stringifiedData);

                xhr2.onload = () => {
                    // Node.js 서버에서 응답한 언어 번역 결과(JSON)를 가지고 화면에 렌더링 처리
                    const responseData = xhr2.response;
                    console.log(responseData);

                    const parsedData = JSON.parse(responseData);
                    console.log(parsedData);

                    targetTextArea.value 
                        = parsedData.message.result.translatedText;
                }
            }
        }
        
        
    }, 2000);

});