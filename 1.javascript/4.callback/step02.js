function a() {
    setTimeout(() => console.log('a() called'), 1000);
}
 
a();
console.log('a() is done');

// a가 호출되고(called)나서야 a가 종료되었다는(done) 순서로 동작하도록
// 실행 순서를 보장하고 싶을 경우? 코드를 어떻게 바꿔야 할까???
// step03.js에 작성