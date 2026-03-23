/**
 * 함수의 표현식
 * - 일반 함수 : function 함수명(파라미터, ...) { 실행문; }
 * - arrow function : const 함수명 = (파라미터...) => { 실행문; }
 * - 변수형 함수 : const 변수명 = function(파라미터) { 실행문; }
 * - 콜백 함수 : 함수에서 호출되는 함수형식, 파라미터 인자로 함수형식이 호출됨
 *      [콜백함수 형식] 함수명 ((파라미터) => { 실행문; })
 *      ex. Array.reduce((acc, cur) => {return acc + cur})
 */

// 1. 일반 함수 정의
function add1 (a, b) {
    return a + b;
}

// 2. Arrow Function
const add2 = (a, b) => {
    return a + b;
}

// 3. 변수형 함수 정의
const add3 = function (a, b) {
    return a + b;
}

// 4. 콜백 함수
const numbers = [1,2,3,4,5];
let sum = numbers.reduce((acc, cur) => {return acc + cur} , 0);
// let sum = numbers.reduce((acc, cur) => acc + cur);

console.log(`add1 = ${add1(1, 2)}`);
console.log(`add2 = ${add2(1, 2)}`);
console.log(`add3 = ${add3(1, 2)}`);
console.log(`sum = ${sum}`);
