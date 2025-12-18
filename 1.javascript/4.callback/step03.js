// step02에 대한 Solution

/**
 * setTimeout? - 비동기 함수이자, 여기서는 비동기 처리를 위한 코드라고 가정
 * a() - a는 실제 서비스의 기능에 해당하는 작업이자 외부 API 요청 코드
 **/

function a(callbackFunction) {

    // 9번에서 let callbackFunction = callback; 이 코드가 실행됨
    setTimeout(() => {
        console.log('a() called');
        // called가 실행되고난 이후에 동작하도록 하기 위해 아래줄에서 호출
        callbackFunction(); // a is done이라는 함수를 호출한 것
    }, 1000);
    // setTimeout도 함수인데, 이 함수는 호출되자마자 바로 종료되버림
}

// JS에서는 변수에 함수도 넣을 수 있다!!!
const callback = () => console.log('a() is done');

a(callback);