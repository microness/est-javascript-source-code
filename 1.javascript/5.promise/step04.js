/**
 * Promise를 활용하여 순서가 있는 2단계 비동기 요청 체인 구현
 * 
 * 
 * 요구사항
 * 1. localhost:4000/posts/1 로 id가 1번인 posts 조회
 * 2. 조회된 posts에서 userId 값을 가지고 user의 상세 정보를 조회
 * 
 * 게시글 1번을 작성한 사람의 상세 정보를 조회하는 기능
 * 
 * 앞의 코드와 다르게 유틸 함수 get()을 제공, 해당 함수를 활용해서 구현
 */

/** 공통 GET 함수 ─ onload · onerror 로직은 그대로 재사용 */
const get = (endpoint) =>
  new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    const url = `http://localhost:4000/${endpoint}`;   // ← posts·users 경로만 바뀜
    xhr.open('GET', url);

    xhr.onload = () => { 
      if (xhr.status === 200) {
        const data = JSON.parse(xhr.response);
        // console.log(data);
        
        resolve(data);
      } else {
        reject(new Error(`HTTP 오류: ${xhr.status}`));
      }
    };

    xhr.onerror = () => {
      reject(new Error('네트워크 오류: 서버 연결 실패'));
    };

    xhr.send();
  });

// TODO: 여기에 작성

// 1단계: id로 게시글 조회
const getPost = (postId) => get(`posts/${postId}`);

// 2단계: 작성자의 id가 무엇인지 확인해서 새로운 요청 전송
// getPost()의 resolve를 통해 응답받은 게시글 데이터를 참고해서 User 정보 조회 요청 전송
const getUser = (post) => get(`users/${post.userId}`)

// 3단계: 작성자의 상세 정보 화면에 출력
// 결과 데이터 출력용 헬퍼 함수
const printUser = (user) => console.log('작성자 상세 정보', user);

// ----------------------
getPost(5) // <-- Promise 객체
// .then(response => console.log(response));
.then(getUser) // 54번 라인의 response 객체 === getUser의 인수인 post와 같음
.then(printUser) // 55번 라인의 getUser의 응답 결과값인 User 객체 === printUser의 인수인 user
// .. then()으로 추가
.catch(console.error);