// callback의 또 다른 단점 - 후속 처리가 복잡함
let global = 0;
 
function setGlobalWith100() {
    console.log('setGlobalWith100 started');

    // 1초가 지났다는 이벤트가 발생하면 콜백을 실행해!!
    setTimeout(() => {
        global = 100;
    }, 1000); 
    console.log('setGlobalWith100 ended');
    return global;
}
 
const result = setGlobalWith100();
 
console.log(result);
console.log(global);