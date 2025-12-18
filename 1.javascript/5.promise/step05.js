/*
    async / await를 활용하여 가독성 높이기
*/

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


/* 1단계: id로 게시글 조회 */
const getPost = (postId) => get(`posts/${postId}`);

/* 2단계: 작성자 — getPost()의 resolve를 통해 응답받은 post 객체를 getUser의 함수 파라미터인 post로 전달받아 post.userId로 사용자 조회 */
const getUser = (post) => get(`users/${post.userId}`);

/* 3단계: 결과 출력용 헬퍼 */
const printUser = (user) => console.log('작성자 상세:', user);

// 1~3단계 함수들을 하나로 합친 함수
async function findUser() {
    const post = await getPost(1);
    const user = await getUser(post);
    printUser(user);
}

console.log('findUser 호출 전');
findUser();
console.log('findUser 호출 후');