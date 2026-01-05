/**
 * DOM에 대해 간단한 코드로 확인
 */

// JS에서 HTML 태그를 JS코드로 가져오면 HTML 태그가 JS 객체(엘리먼트 노드)로 변환됨

const headingElement = document.querySelector('h1'); // index.html에서 h1태그 가져오기
console.log(headingElement); // 엘리먼트 노드
console.log(typeof headingElement); // JS object

// headingElement는 HTMLDivElement 타입인지?
const result = headingElement instanceof HTMLDivElement;
console.log(result); // false

const result2 = headingElement instanceof HTMLHeadingElement;
console.log(result2);

// --------------------------

/**
 * 위 코드들을 기반으로 DOM이 구성되었을 경우,
 * 브라우저는 내부적으로 DOM을 화면에 그려내기 위해 파싱 작업을 수행해야함
 * -> DOM Parsing(HTML 문자열을 DOM Tree로 변환하는 과정)
 */

const domParser = new DOMParser(); // DOMParser 생성, DOM 파싱 작업 수행하는 역할

// 인수로 전달받은 문자열을 가지고 HTML Document의 형태로 파싱 작업을 수행해줌
const parsedResult = domParser.parseFromString('<div class="main">hello</div>', 'text/html');

console.log(parsedResult);