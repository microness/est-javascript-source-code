/*
    현재 어떤 서버를 통해 비동기적으로 데이터를 받아오는 요청 처리 코드 작성
*/

// 1. XMLHttpRequest 객체 생성 및 xhr 변수에 초기화
const xhr = new XMLHttpRequest();
console.log(typeof xhr); // typeof 연산자를 통해 xhr의 타입 확인
console.dir(xhr);

// 2. 특정 서버에게 요청을 준비하는 코드 - xhr.open()

    // 서버의 엔드포인트
    const REQUEST_URL = 'https://jsonplaceholder.typicode.com/users/1';

    // 요청 준비 - 요청 메서드, 요청을 전송할 주소가 어디인지? 명시
    xhr.open('GET', REQUEST_URL);

// 3. 실제 요청 전송 - send()
xhr.send();

// TODO: 외부 서버로부터 데이터가 모두 응답(다운로드)되었을 때 처리할 이벤트 로직??
xhr.onload = () => {
    // 데이터가 모두 응답되었을 때 수행할 로직(화면에 출력) 작성 부분
    
    if (xhr.readyState === xhr.DONE && xhr.status === 200) {
        console.log('데이터가 다운로드됨');
        // responseText: 서버로부터 응답받은 데이터
        console.log(xhr.responseText); // 데이터 타입 확인??
        
        // console.log(xhr.responseText.name); // 문자열 타입이라 프로퍼티처럼 접근 불가
        const response = xhr.responseText;
        
        // JS 객체 형태로 파싱 - JSON.parse();
        const result = JSON.parse(response);
        console.log(result);
        
        console.log(result.name);
    }
}