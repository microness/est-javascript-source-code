/*
    setTimeout이 아닌, XHR과 Promise를 활용하여 실제 비동기 요청 처리 수행
*/

const executor = (resolve, reject) => {
    // TODO: XHR 문법을 활용하여 localhost:4000/users로 
    // 요청 및 응답 데이터 출력하는 코드 작성
    
    const xhr = new XMLHttpRequest();
    const URL = 'http://localhost:4000/users';
    xhr.open('GET', URL);

    // onload 이벤트
    xhr.onload = () => {
        if (xhr.status === 200) { // 응답 성공 시
            const data = JSON.parse(xhr.response);

            // 성공할 경우 여기에서 resolve() 호출
            resolve(data)
        } else { // 2xx이 아닌 상태코드 관련 에러..

            // 실패할 경우 여기에서 reject() 호출
            reject(new Error(`HTTP 오류: ${xhr.status}`))
        }
    }

    xhr.send();
}

const promise = new Promise(executor);

// TODO: then, catch()
promise
// 19번 라인의 resolve()의 인수로 전달된 결과값 데이터(data)가 then() 내 response로 전달됨
.then(response => console.log(response)) // then()은 Promise 객체 자기 자신을 반환함
.catch(error => {// 메서드 체이닝(chaning)
    console.log('catch 블럭');
    console.error(error);
}) 
