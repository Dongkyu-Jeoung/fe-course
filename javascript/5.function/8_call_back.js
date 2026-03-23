/**
 * callback(콜백) 함수 : 함수의 파라미터에 입력되는 익명함수(anonymous)
 */

const job = (a, b, callback) => {
    // console.log(a, b);
    callback(a,b);
}

const print = (a, b)=>{console.log(a, b)};
const printSum = (a, b)=>{console.log(a + b)};

job(1, 2, (a, b)=>{console.log(a, b)});
job(1, 2, print);
job(10, 20, (a,b)=>{console.log(a + b)});
job(10, 20, printSum);

// 비동기식 처리 함수 : setTimeout(funcRef, delay);
// 내장 함수, 전역함수
console.log('console에 로그 출력 #1');

setTimeout(() => {console.log('setTimeout 실행결과')}, 1000);   // 1000ms(1s)후에 callback 함수 실행

console.log('console에 로그 출력 #2');