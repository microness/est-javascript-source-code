// appV3.js - 사용자가 입력한 텍스트(ex. "안녕")를 expres.js 서버(serverV3.js)로 전달하는 로직 작성

const [sourceTextArea, targetTextArea] 
    = document.getElementsByTagName('textarea');

let timerId;
sourceTextArea.addEventListener('input', (event) => {
    if (timerId) clearTimeout(timerId);

    timerId = setTimeout(() => {
        // 사용자가 입력한 텍스트값(번역할 텍스트)
        const text = event.target.value; // "안녕"

        // TODO: text 변수의 값을 서버로 전송하는 코드 작성
            // 서버로 전송할 때는 비동기 요청으로 전송을 해보자 with XMLHttpRequest API 활용

            // XHR 코드 작성 순서
                // 1. XHR API(객체) 생성
                const xhr = new XMLHttpRequest();

                // 2. 요청 준비(어떤 요청이고?, 요청을 보낼 서버의 엔드포인트 주소는?)
                    // 2-1. 엔드포인트 주소
                    const EXAMPLE_URL = '/example'; // lh:3000/example로 처리됨

                    // 2-2. 전송할 데이터(JS 객체 형태로 전송)
                    const data = {
                        query: text
                    }
                    // 전송 전 요청 데이터 직렬화
                    const stringifiedData = JSON.stringify(data);

                    xhr.open('POST', EXAMPLE_URL); // POST: /example 엔드포인트로 전송 준비

                // 3. 실제 요청 전송
                xhr.setRequestHeader('Content-Type', 'application/json');
                xhr.send(stringifiedData); // 전송할 데이터 포함

                // 4. 서버로부터 응답을 받았을 경우 실행시킬 이벤트 로직(onload)
                xhr.onload = () => {
                    // 이벤트 로직(onload)
                    // -> 서버로부터 응답받은 데이터("Hello!")를 화면에 렌더링해야함

                    // "응답이 성공적으로 완료되었을 경우?"에 대한 조건식
                    if (xhr.readyState === xhr.DONE && xhr.status === 200) {

                        // xhr.response = 응답 데이터가 담겨있는 변수
                        const responseData = xhr.response; // 문자열 형태
                        console.log(responseData); // 브라우저 콘솔에서 확인해야함
                        
                        // 결과 데이터를 JS 객체 형태로 파싱(역직렬화)
                        const parsedData = JSON.parse(responseData);
                        // -> {"result":"Hello!"}

                        // result 프로퍼티에 접근하여 값을 취득하고, 결과부분에 렌더링
                        targetTextArea.value = parsedData.result;
                    }
                }

                // 여기서 언어 번역 요청 코드를 작성하고싶음
                    // 언어 번역 요청하려면 언어 코드가 필요함
                    // 근데 언어코드값은 xhr.onload라는 함수 내부에 있음(하위 스코프에 있는 상황)
    }, 2000);

});