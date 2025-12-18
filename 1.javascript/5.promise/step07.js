/*
  유틸함수 get() 없이, 단일 async 함수(findUser)에서 fetch를 직접 호출한 버전
  -------------------------------------------------
  1) /posts/:postId → 게시글 조회
  2) post.userId    → /users/:userId → 작성자 조회
*/

async function findUser(postId = 1) {
  const base = 'http://localhost:4000';

  try {
    /* ① 게시글 조회 */
    const postRes = await fetch(`${base}/posts/${postId}`);
    if (!postRes.ok) {
      throw new Error(`HTTP 오류(게시글): ${postRes.status}`);
    }
    const post = await postRes.json();

    /* ② 작성자 조회 */
    const userRes = await fetch(`${base}/users/${post.userId}`);
    if (!userRes.ok) {
      throw new Error(`HTTP 오류(사용자): ${userRes.status}`);
    }
    const user = await userRes.json();

    console.log('작성자 상세:', user);      // 최종 결과
  } catch (err) {
    // 네트워크 오류(TypeError)와 위에서 throw한 Error 모두 여기서 처리
    console.error('실패:', err.message || err);
  }
}

console.log('findUser 호출 전');
findUser();             // 필요하면 findUser(원하는 postId)
console.log('findUser 호출 후');
