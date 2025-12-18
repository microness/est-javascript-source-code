function order(food, callback) {
    console.log(callback); // callback 변수 자체에는 뭐가 들어있지?
    
    console.log(`${food} 도착`);
    callback(); // callack이라는 변수는 order함수의 지역변수
    // -> 지역변수를 함수처럼 호출할 수 있음(단, 내부의 값이 실제 함수일 경우에만)
}
 
// function eat() {
//     console.log('먹는다');
// }


// 화살표 함수로 작성
const eat = () => console.log('먹는다');
  
order('짜장면', eat);

