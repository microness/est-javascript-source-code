// 비동기 방식

/**
 * 현재 실행 중인 작업(first())이 아직 종료되지 않은 상태라고 해도,
 * 다음 작업(second())을 곧바로 실행하는 방식
 */

function first() {
    console.log('first() called');
}

function second() {
    console.log('second() called');
}

// second가 먼저 출력되고, first가 출력되도록
// second가 비동기적으로 먼저 실행되고 first가 실행되도록 하려면??


// Web API에서 제공하는 API들 중에 비동기로 동작하는 함수들이 몇가지 있음
// ex. setTimeout(), XMLHttpRequest, addEventListener()...

// setTimeout(콜백함수, 지연시킬 시간) - 일정 시간 지연시킨 이후 실행시킬 함수를 작성할 때 활용

setTimeout(first, 2000); // 1초 후에 first()함수를 호출
second(); // second() 함수 호출