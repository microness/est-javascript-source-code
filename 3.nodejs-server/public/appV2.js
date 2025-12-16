// TODO: '안녕'이라고 한 번만 출력되도록 코드를 추가
// 디바운스&쓰로틀링

const [sourceTextArea, targetTextArea] 
    = document.getElementsByTagName('textarea');

// 안녕을 입력하려면 시점상 ㅇ이 먼저 입력됨

// 1. 'ㅇ'만 입력했을 때 input 이벤트가 발생하게 됨
// 2. '아' -> input 이벤트가 새롭게 다시 발생
// 3. '안' -> input 이벤트가 새롭게 다시 발생
// -> 총 3번 이벤트 발생

// setTimeout() -> 일정 시간이 지연되고 나서 호출되는 함수

let timerId; // 타이머 ID를 담을 임시 변수 선언
sourceTextArea.addEventListener('input', (event) => {
    // console.log('input 호출됨');
    if(timerId) clearTimeout(timerId); // 전달된 타이머ID의 해당하는 타이머 초기화
    
    timerId = setTimeout(() => {
        console.log(event.target.value);
        
    }, 2000);
    // console.log(`타이머 ID: ${timerId}`);
    
    // ㅇ입력한거? 2초 카운트 시작!! - A카운터(0..1..1.5..)
    // 아 입력한거? 2초 카운트 시작!! - B카운터(0..1...1.8..)
    // -> 2초가 되기 전에 카운터 초기화해버리기

    // 안 입력한거? 2초 카운트 시작!! - C카운터
        // 마지막으로 입력한 카운터만 유지시킴

    // 각각이 별도의 카운터 객체들이 있음

});
    