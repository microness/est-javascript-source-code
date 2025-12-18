/**
 * Promise 객체의 함수로 전달되는 콜백 함수??
 * - Promise(약속)에 대한 이행/실패 여부에 따른 처리 로직을 작성하는 함수
 * 
 * resolve, reject
 * 
 * resolve
 * - Promise가 이행되면, fulfilled 상태로 전환되는데,
 * 그때 호출되는 함수 resolve()
 * -> 요청 처리에 대한 성공 결과값이 담기는 곳
 * 
 * rejected
 * - Promise가 실패하면, Promise의 상태가 rejected 상태로 전환됨
 * 그때 호출되는 함수 rejected()
 * -> 요청 처리에 대한 실패(에러 메시지)값이 담기는 곳
 * 
 * Promise는 세 가지 상태가 있음
 * 1. pending - 약속 이행 전 상태
 * 2. fulfilled - 약속이 이행됨(비동기 요청 처리 결과가 성공적으로 응답됨)
 * 3. rejected - 약속 이행 실패(요청 처리 실패 및 에러 메시지 반환)
 */

const executor = (resolve, reject) => {
    // resolve, reject는 executor 콜백함수의 인수로 전달되는 콜백함수
    // resolve()는 요청 성공 결과값이 담김
    // reject()는 요청 처리 실패 결과값이 담김

    // 여기서는 setTimeout으로 비동기 요청 처리를 재현
    setTimeout(() => {

        // 요청이 성공하면 resolve() 호출
        //resolve('요청 처리 성공 결과 데이터');

        // 요청이 실패했을 경우?
        reject('요청 처리 실패 메시지!');
    });
}

const promise = new Promise(executor);
console.log(promise);

// Promise를 통한 요청 처리 성공 결과값은 then()를 통해 활용 가능
promise
    // 요청이 성공하면 결과 데이터가 response로 전달됨
    .then((response) => {
        console.log(response);
    })
    // 요청이 실패하면 에러 메시지가 error로 전달됨
    .catch(error => {
        console.error(error);
    })