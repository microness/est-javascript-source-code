function a() {
  const aCallback = () => console.log('a() started');
  setTimeout(aCallback, 1000);
}
 
function b() {
  const bCallback = () => console.log('b() started');
  setTimeout(bCallback, 500);
}
 
function c() {
  const cCallback = () => console.log('c() started');
  setTimeout(cCallback, 1200);
}
 
a();
console.log('a() done');
b();
console.log('b() done');
c();
console.log('c() done');

// step05.js에서 a, b, c 순서대로 started, done 순서로 끝나도록 코드 변경해보기