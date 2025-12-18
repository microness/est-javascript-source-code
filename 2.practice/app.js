// TODO: 번역 기능 구현을 위한 의사코드 및 실제코드 작성

    // 사용자가 번역할 내용 입력 부분에 '안녕' 등 텍스트를 입력하면,
    // JS에서 해당 입력값을 브라우저 console에서 출력할 수 있게 구현

// 키보드 입력 이벤트 이름??
    // 구글보다 GPT로 검색을 많이함
    // 만약 이벤트를 addEventListener()로 사용할 경우

    // 의사코드
    // 1. 이벤트를 부여할 HTML 엘리먼트를 찾아서 JS로 가져온다
        // source~ - 번역 대상이 되는 텍스트, 언어의 타입
        // target~ - 번역 결과가 되는 텍스트, 언어의 타입
    const [sourceTextArea, targetTextArea] 
        = document.getElementsByTagName('textarea');
    console.log(sourceTextArea);
    
    // 2. sourceTextArea에게 (키보드 입력) 이벤트 부여
    sourceTextArea.addEventListener('input', (event) => {
        console.log(event.data);
        
        // TODO: '안녕'이라고 한 번만 출력되도록 코드를 추가
        // 디바운스&쓰로틀링
    });
    