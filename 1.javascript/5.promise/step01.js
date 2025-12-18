/**
 * Promise 객체 생성
 * 
 * 우리는 Promise를 통해 비동기 요청 처리를 수행할 것
 * Promise 객체를 생성하기만 하면 별도의 비동기 요청처리가 아직 수행한 것이 아님
 * 따라서 Pending 상태를 가지고 있음
 */

// const promise = new Promise(콜백 함수);

const executor 
    = () => console.log('executor 호출됨');

const promise = new Promise(executor);
console.log(promise); // 비동기 처리를 수행하기 전
// 즉, 아직 수행하지 않은 Promise 객체의 상태 <Pending>

// pending: 방금 누군가와 약속을 맺기만 했고, 
// 아직 약속의 이행/실패 결과가 나오지 않은 상태