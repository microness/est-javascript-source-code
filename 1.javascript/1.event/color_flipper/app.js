console.log('app.js 실행됨');

// 1. 이벤트를 부여할 버튼(Click me)을 JS코드상으로 가져온다.
    // 1-1. document 객체를 활용하여 특정 HTML 엘리먼트를 가져온다.
    const button = document.getElementById('btn');
    console.log(button); // 출력값 로깅을 통해 확인
    const colorText = document.getElementById('color');
    console.dir(colorText); // colorText 노드객체의 프로퍼티 확인
    
// 2. 가져온 버튼에 이벤트를 부여한다

    // 사용자가 버튼을 클릭하면 브라우저 Console에 "클릭됨!"이라는 텍스트가 출력되도록
    
    // TODO: 직접 작성해보기
        // hint. "이벤트대상이 되는 객체가 담긴 변수".addEventListener('이벤트명', 콜백함수);
        /*
            add(추가하다) Event(이벤트)의 Listener(리스너?)
            
            Listener(리스너) 
            무언가 어떤 이벤트가 발생하기를 계속 기다리고 있다가
            '이벤트'가 발생하면 '콜백 함수'를 호출시키는 역할을 수행하는 사람(?)

            -> 클릭 이벤트가 발생하면 '버튼이 클릭됨!!'이라는 콜백함수가 호출되도록 동작시키는 역할 수행
        */
        button.addEventListener('click', () => {
            console.log('버튼이 클릭됨!!');

            // 3. 이벤트가 동작하면 후처리 로직을 작성한다.
                
                const rgbList = getRandomNumber(0, 255);
                console.log(rgbList);
                
                // 별도의 변수 할당에 대한 번거로움
                // const red = rgbList[0];
                // const green = rgbList[1];
                // console.log(red, green);

                // '배열' 구조 분해해서 별도의 변수에 할당(Destructuring Assignment)
                const [red, green, blue] = getRandomNumber(0, 255);

                // 3-1. 화면의 색상 텍스트 변경하기
                const rgbColor = `rgb(${red}, ${green}, ${blue})`;
                console.log(rgbColor);

                    // 색상 변경 처리
                colorText.textContent = rgbColor;
                colorText.style.color = rgbColor;

                // 3-2. 배경색 변경하기
                document.body.style.backgroundColor = rgbColor;
        });

// 랜덤값 추출
function getRandomNumber(min, max) {
    const randomRGBArray = [];

    for (let i = 0; i < 3; i++) {
        const randomNumber = Math.floor(Math.random() * ( max - min + 1)) + min;
        randomRGBArray.push(randomNumber);
    }

    return randomRGBArray;
}