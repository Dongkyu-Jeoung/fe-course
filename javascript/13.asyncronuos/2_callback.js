/**
 * callback : 함수의 인자에 입력되는 함수 로직, annonymous(무기명) 함수
 * - setTimeout(callback, delay)
 */

function runDelay (callback, delay) {
    setTimeout(callback, delay);
}

runDelay (() => {
    console.log(`3초 후에 Task Queue에 저장!`);    
}, 3000);    // 3초 후에 Task Queue에 저장, 콜스택이 callback 함수 실행

runDelay(function() {
    console.log(`Task Queue에 바로 저장!`);    
});         // Task Queue에 바로 저장, 콜스택이 callback 함수 실행
runDelay(() => {
    console.log(`1초 후에 Task Queue에 저장!`);    
}, 1000);       

console.log('------------프로그램 종료---------------');
